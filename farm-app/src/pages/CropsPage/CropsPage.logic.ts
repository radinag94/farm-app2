import { useState,useEffect } from "react";
import { CropData } from "../../components/statics/interfaces";
import CropService from "../../services/CropService";
export const useCropsLogic = () => {
const [crops, setCrops] = useState<CropData[]>([]);
  const [newCropName, setNewCropName] = useState("");

  useEffect(() => {
    fetchCrops();
  }, []);

  const fetchCrops = async () => {
    try {
      const cropsData = await CropService.fetchCrops();
      setCrops(cropsData);
    } catch (error) {
      console.error("Error fetching crops", error);
    }
  };

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

  return {crops,createCrop,handleDeleteCrop,newCropName,setNewCropName}
}