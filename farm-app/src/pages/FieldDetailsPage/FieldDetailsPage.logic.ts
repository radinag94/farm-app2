import { FieldData } from "../../components/statics/interfaces";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FieldService from "../../services/FieldService";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FarmData } from "../../components/statics/interfaces";
import { useQuery,QueryClient } from "react-query";

const queryClient = new QueryClient();

export const useFieldDetailsLogic = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const mapRef = useRef<L.Map | null>(null);


  const fieldDetailsQueryKey = ['fieldDetails', id];
  const associatedFarmQueryKey = ['associatedFarm' ,id]

  const { data: fieldDetails, error, isLoading } = useQuery<FieldData | null, Error>(
    fieldDetailsQueryKey,
    async () => {
      if (id) {
        const data = await FieldService.fetchFieldById(id);
        return data;
      }
      return null;
    }
  );

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



  const handleDeleteField = async () => {
    try {
      if (id) {
        await FieldService.deleteFieldById(id);
        queryClient.invalidateQueries(fieldDetailsQueryKey);
        navigate('/field');
      }
    } catch (error) {
      console.error('Error deleting field:', error);
    }
  };

  return { fieldDetails, handleDeleteField, associatedFarm, isLoading, error };
};
