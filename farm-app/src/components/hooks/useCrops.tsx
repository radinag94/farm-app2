import { useState, useEffect } from "react";
import MachineService from "../machine/MachineService";
import CropService from "../crop/CropService";
export interface cropData {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export const useCrops = () => {
  const [crops, setCrops] = useState<cropData[]>([]);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const cropData = await CropService.fetchCrops();
        setCrops(cropData);
      } catch (error) {
        console.error("Error in fetching crops", error);
      }
    };

    fetchCrops();
  }, []);

  return crops;
};
