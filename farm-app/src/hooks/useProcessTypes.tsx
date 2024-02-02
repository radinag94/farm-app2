import { useState, useEffect } from "react";
import ProcessTypeService from "../services/ProcessTypeService";
export interface ProcessTypeData {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export const useProcessTypes = () => {
  const [processTypes, setProcessTypes] = useState<ProcessTypeData[]>([]);

  useEffect(() => {
    const fetchProcessTypes = async () => {
      try {
        const processTypeData = await ProcessTypeService.fetchProcessTypes();
        setProcessTypes(processTypeData);
      } catch (error) {
        console.error("Error in fetching process types", error);
      }
    };

    fetchProcessTypes();
  }, []);

  return processTypes;
};
