import { useState, useEffect } from "react";
import FarmService from "../services/farmService";
// import { FarmData } from "../../pages/HomePage";
export interface FarmData {
  id: string;
  name: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export const useFarms = () => {
  const [farms, setFarms] = useState<FarmData[]>([]);

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const farmsData = await FarmService.fetchFarms();
        setFarms(farmsData);
      } catch (error) {
        console.error("Error in fetching farms", error);
      }
    };

    fetchFarms();
  }, []);

  return farms;
};
