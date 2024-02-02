import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FarmData } from "../../components/statics/interfaces";
import FarmService from "../../services/farmService";
import L from "leaflet";

export const useFarmDetailsLogic = () => {
  const { id } = useParams<{ id: string }>();
  const [farmDetails, setFarmDetails] = useState<FarmData | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFarmDetails = async () => {
      try {
        if (id) {
          const data = await FarmService.fetchFarmById(id);
          setFarmDetails(data);
        }
      } catch (error) {
        console.error("Error fetching farm details:", error);
      }
    };

    if (id) {
      fetchFarmDetails();
    }
  }, [id]);

  useEffect(() => {
    if (farmDetails && farmDetails.location) {
      const [longitude, latitude] = farmDetails.location.coordinates;

      if (!mapRef.current) {
        const newMap = L.map("map").setView([latitude, longitude], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
          newMap
        );
        L.marker([latitude, longitude]).addTo(newMap);
        mapRef.current = newMap;
      }
    }
  }, [farmDetails]);

  const handleDeleteFarm = async () => {
    try {
      if (id) {
        await FarmService.deleteFarmById(id);
        navigate("/farm");
      }
    } catch (error) {
      console.error("Error deleting farm:", error);
    }
  };

  return { farmDetails, handleDeleteFarm };
};
