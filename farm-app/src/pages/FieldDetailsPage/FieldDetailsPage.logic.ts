import { FieldData } from "../../components/statics/interfaces";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FieldService from "../../services/FieldService";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FarmData } from "../../components/statics/interfaces";

export const useFieldDetailsLogic = () => {
  const { id } = useParams<{ id: string }>();
  const [fieldDetails, setFieldDetails] = useState<FieldData | null>(null);
  const navigate = useNavigate();
  const mapRef = useRef<L.Map | null>(null);
  const [associatedFarm, setAssociatedFarm] = useState<FarmData | null>(null);

  useEffect(() => {
    const fetchFieldDetails = async () => {
      try {
        if (id) {
          const data = await FieldService.fetchFieldById(id);
          setFieldDetails(data);
        }
      } catch (error) {
        console.error("Error fetching farm details:", error);
      }
    };

    if (id) {
      fetchFieldDetails();
    }
  }, [id]);

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

  useEffect(() => {
    const fetchAssociatedFarm = async () => {
      try {
        if (id) {
          const farm = await FieldService.fetchFarmByFieldId(id);
          setAssociatedFarm(farm);
        }
      } catch (error) {
        console.error("error in fetching associated farm", error);
      }
    };
    fetchAssociatedFarm();
  }, [id]);

  const handleDeleteField = async () => {
    try {
      if (id) {
        await FieldService.deleteFieldById(id);
        navigate("/field");
      }
    } catch (error) {
      console.error("Error deleting field:", error);
    }
  };

  return { fieldDetails, handleDeleteField ,associatedFarm};
};
