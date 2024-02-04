import { useState, useEffect } from "react";
import CropService from "../services/CropService";
import { CropData } from "../components/statics/interfaces";


export const useCrops = () => {
  const [crops, setCrops] = useState<CropData[]>([]);

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
