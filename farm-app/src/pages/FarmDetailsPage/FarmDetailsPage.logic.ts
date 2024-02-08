import { MachineData } from "./../../components/statics/interfaces";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FarmData, FieldData } from "../../components/statics/interfaces";
import FarmService from "../../services/farmService";
import L from "leaflet";
import MachineService from "../../services/MachineService";
import FieldService from "../../services/FieldService";
import { useQuery } from "react-query";

export const useFarmDetailsLogic = () => {
  const { id } = useParams<{ id: string }>();

  const mapRef = useRef<L.Map | null>(null);
  const navigate = useNavigate();

  const {
    data: farmDetails,
    isError: isFarmDetailsError,
    error: farmDetailsError,
  } = useQuery(
    ["farmDetails", id],
    () => {
      if (!id) throw new Error("Farm ID is undefined");
      return FarmService.fetchFarmById(id);
    },
    {
      enabled: !!id,
    }
  );
  const [showFields, setShowFields] = useState(false);
  const [showMachines, setShowMachines] = useState(false);

  const {
    data: associatedMachines,
    isError: isMachinesError,
    error: machinesError,
  } = useQuery<MachineData[], Error>(
    ["associatedMachines", id],
    () => {
      if (!id) throw new Error("id is undefined");
      return MachineService.fetchMachinesByFarmId(id);
    },
    {
      enabled: !!id && showMachines,
      retry: 1,
    }
  );

  const {
    data: associatedFields,
    isError: isFieldsError,
    error: fieldsError,
  } = useQuery<FieldData[], Error>(
    ["associatedFields", id],
    () => {
      if (!id) throw new Error("id is undefined");
      return FieldService.fetchFieldsByFarmId(id);
    },
    {
      enabled: !!id && showFields,
    }
  );
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
  const handleUpdate = () => {
    if (farmDetails && farmDetails.id) {
      const updatePath = `/farm/${farmDetails.id}/update-farm`;
      navigate(updatePath);
    }
  };

  return {
    farmDetails,
    handleDeleteFarm,
    showFields,
    showMachines,
    associatedMachines,
    toggleShowFields,
    associatedFields,
    toggleShowMachines,handleUpdate,
    isError: isFarmDetailsError || isMachinesError || isFieldsError,
    error: farmDetailsError || machinesError || fieldsError,
  };
};
