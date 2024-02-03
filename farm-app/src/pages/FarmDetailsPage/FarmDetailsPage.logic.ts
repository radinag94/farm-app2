import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FarmData, FieldData } from "../../components/statics/interfaces";
import FarmService from "../../services/farmService";
import L from "leaflet";
import { MachineData } from "../../hooks/useMachines";
import MachineService from "../../services/MachineService";
import FieldService from "../../services/FieldService";

export const useFarmDetailsLogic = () => {
  const { id } = useParams<{ id: string }>();
  const [farmDetails, setFarmDetails] = useState<FarmData | null>(null);
  const [showFields, setShowFields] = useState(false);
  const [showMachines, setShowMachines] = useState(false);
  const [associatedMachines, setAssociatedMachines] = useState<MachineData[]>([]);
  const [associatedFields, setAssociatedFields] = useState<FieldData[]>([]);
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
    const fetchAssociatedMachines = async () => {
      try {
        if (id && showMachines) {
          const machines = await MachineService.fetchMachinesByFarmId(id);
          setAssociatedMachines(machines);
        }
      } catch (error) {
        console.error("Error fetching associated machines:", error);
      }
    };

    fetchAssociatedMachines();
  }, [id, showMachines]);

  useEffect(() => {
    const fetchAssociatedFields = async () => {
      try {
        if (id && showFields) {
          const fields = await FieldService.fetchFieldsByFarmId(id);
          setAssociatedFields(fields);
        }
      } catch (error) {
        console.error("Error fetching associated fields:", error);
      }
    };

    fetchAssociatedFields();
  }, [id, showFields]);


  const toggleShowFields = () => {
    setShowFields(!showFields);
    setShowMachines(false);
  };

  const toggleShowMachines = () => {
    setShowMachines(!showMachines);
    setShowFields(false);
  };

 
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

  return { farmDetails, handleDeleteFarm,showFields,
    showMachines,
    associatedMachines, toggleShowFields,associatedFields,
    toggleShowMachines };
};
