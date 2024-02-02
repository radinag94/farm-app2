import { useState, useEffect } from "react";
import SoilService from "../services/SoilService";
export interface SoilData {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export const useSoils = () => {
  const [soils, setSoils] = useState<SoilData[]>([]);

  useEffect(() => {
    const fetchSoils = async () => {
      try {
        const soilData = await SoilService.fetchSoils();
        setSoils(soilData);
      } catch (error) {
        console.error("Error in fetching soils", error);
      }
    };

    fetchSoils();
  }, []);

  return soils;
};
