import { useState,useEffect } from "react";
import { CropData } from "../../components/statics/interfaces";
import CropService from "../../services/CropService";
import { useCrops } from "../../hooks/useCrops";
export const useCropsLogic = () => {
const {crops, fetchCrops, isLoading, isError, error} = useCrops()
  const [newCropName, setNewCropName] = useState("");

  const createCrop = async () => {
    try {
      await CropService.createCrop({
          name: newCropName,
          id: "",
          createdAt: "",
          updatedAt: "",
          deletedAt: null
      });

      fetchCrops();
      setNewCropName("");
    } catch (error) {
      console.error("Error creating crop", error);
    }
  };

  const handleDeleteCrop = async (cropId: string) => {
    try {
      await CropService.deleteCropById(cropId);
      fetchCrops();
    } catch (error) {
      console.error("Error deleting crop:", error);
    }
  };

  return {crops,createCrop,handleDeleteCrop,newCropName,setNewCropName,isLoading,isError,error}
}