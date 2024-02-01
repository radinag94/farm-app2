import { useState, useEffect } from "react";
import GrowingPeriodService from "../growing-period/GrowingPeriodService";

export interface GrowingPeriodData {
  id: string;
  cropId: string;
  fieldId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export const useGrowingPeriods = () => {
  const [growingPeriods, setGrowingPeriods] = useState<GrowingPeriodData[]>([]);

  useEffect(() => {
    const fetchGrowingPeriods = async () => {
      try {
        const growingPeriodData =
          await GrowingPeriodService.fetchGrowingPeriods();
        setGrowingPeriods(growingPeriodData);
      } catch (error) {
        console.error("Error in fetching soils", error);
      }
    };

    fetchGrowingPeriods();
  }, []);

  return growingPeriods;
};
