import { useState} from "react";
import {  useSoils } from "../../hooks/useSoils";
import SoilService from "../../services/SoilService";


export const useSoilsLogic = () => {
  const {soils,fetchSoils} = useSoils()
  const [newSoilType, setNewSoilType] = useState("");

  const createSoil = async () => {
    try {
      await SoilService.createSoil({
        type: newSoilType,
        id: "",
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
      });
      setNewSoilType("");
      fetchSoils(); 
    } catch (error) {
      console.error("Error creating soil", error);
    }
  };


  const handleDeleteSoil = async (soilId: string) => {
      try {
        await SoilService.deleteSoilById(soilId);
        fetchSoils(); 
      } catch (error) {
        console.error("Error deleting soil:", error);
      }
    };

    return {soils,createSoil,handleDeleteSoil,newSoilType,setNewSoilType}
}