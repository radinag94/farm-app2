import {
  CropData,
  FieldData,
  GrowingPeriodData,
} from "../../components/statics/interfaces";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FieldService from "../../services/FieldService";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FarmData } from "../../components/statics/interfaces";
import { useQuery, QueryClient } from "react-query";
import CropService from "../../services/CropService";
import GrowingPeriodService from "../../services/GrowingPeriodService";
import { useSoils } from "../../hooks/useSoils";
import SoilService from "../../services/SoilService";

const queryClient = new QueryClient();

export const useFieldDetailsLogic = () => {
  const { id } = useParams<{ id: string }>();
  // const navigate = useNavigate();
  const mapRef = useRef<L.Map | null>(null);

  const fieldDetailsQueryKey = ["fieldDetails", id];
  const associatedFarmQueryKey = ["associatedFarm", id];
  const associatedCropQueryKey = ["associatedCrops", id];
  const associatedGrowingPeriodsQueryKey = ["associatedGrowingPeriods", id];

  const { soils = [], fetchSoils } = useSoils();

  const navigate = useNavigate();

  const [soilType, setSoilType] = useState<string | null>(null);

  // const { fieldId } = useParams<{ fieldId: string }>();
  const {
    data: fieldDetails,
    error,
    isLoading,
  } = useQuery<FieldData | null, Error>(fieldDetailsQueryKey, async () => {
    if (id) {
      const data = await FieldService.fetchFieldById(id);
      return data;
    }
    return null;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchSoils();

        if (fieldDetails && fieldDetails.soilId) {
          try {
            const soilData = await SoilService.fetchSoilById(
              fieldDetails.soilId
            );
            setSoilType(soilData.type);
          } catch (error) {
            console.error("Error fetching soil", error);
            setSoilType("Soil Deleted");
          }
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [fieldDetails, fetchSoils]);

  const handleUpdateField = () => {
    if (fieldDetails && fieldDetails.id) {
      const updatePath = `/field/${fieldDetails.id}/update-field`;
      navigate(updatePath);
    }
  };

  const handleCreateGrowingPeriod = () => {
    if (fieldDetails && fieldDetails.id) {
      const updatePath = `/field/${fieldDetails.id}/create-growing-period`;
      navigate(updatePath);
    }
  };

  const handleViewAllGrowingPeriods = () => {
    if (fieldDetails && fieldDetails.id) {
      navigate(`/field/${fieldDetails.id}/growing-periods`);
    }
  };

  useEffect(() => {
    if (fieldDetails && fieldDetails.shape) {
      const borders = fieldDetails.shape;
      const coordinates = borders.coordinates;

      // Check if map container is already initialized
      if (!mapRef.current) {
        // Create a new map
        const newMap = L.map("fieldMap");
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
          newMap
        );

        // Create an array to store LatLng objects
        const latLngs = coordinates[0].map((coord) =>
          L.latLng(coord[1], coord[0])
        );

        // Create a Leaflet Polygon with the array of LatLngs
        const polygon = L.polygon(latLngs);

        // Add the Polygon to the map
        polygon.addTo(newMap);

        // Fit the map to the bounds of the Polygon
        newMap.fitBounds(polygon.getBounds());

        // Save the new map reference
        mapRef.current = newMap;
      }
    }
  }, [fieldDetails]);

  const { data: associatedFarm } = useQuery<FarmData | null, Error>(
    associatedFarmQueryKey,
    async () => {
      if (id) {
        const farm = await FieldService.fetchFarmByFieldId(id);
        return farm;
      }
      return null;
    }
  );

  const { data: associatedCrops } = useQuery<CropData[] | null, Error>(
    associatedCropQueryKey,
    async () => {
      if (!associatedCrops) {
        return null;
      }
      if (id) {
        const crops = await CropService.fetchCropsByFieldId(id);
        return crops;
      }
    }
  );

  const hasCrops = associatedCrops && associatedCrops.length > 0;

  const { data: associatedGrowingPeriods } = useQuery<
    GrowingPeriodData[] | null,
    Error
  >(associatedGrowingPeriodsQueryKey, async () => {
    if (id) {
      const growingPeriods =
        await GrowingPeriodService.fetchGrowingPeriodsByFieldId(id);
      return growingPeriods;
    }
    return null;
  });
  const mostRecentGrowingPeriod = associatedGrowingPeriods?.[0];

  const handleDeleteField = async () => {
    try {
      if (id) {
        await FieldService.deleteFieldById(id);
        queryClient.invalidateQueries(fieldDetailsQueryKey);
        navigate("/field");
      }
    } catch (error) {
      console.error("Error deleting field:", error);
    }
  };

  return {
    fieldDetails,
    handleDeleteField,
    associatedFarm,
    isLoading,
    error,
    associatedCrops,
    associatedGrowingPeriods,
    handleUpdateField,
    handleCreateGrowingPeriod,
    handleViewAllGrowingPeriods,
    mostRecentGrowingPeriod,
    soilType,hasCrops
  };
};
