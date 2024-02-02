import { useState, useEffect } from "react";
import FieldCultivationService from "../services/FieldCultivationService";

export interface FieldCultivationData {
  id: string;
  pDate: string;
  machineId: string;
  processTypeId: string;
  growingPeriodId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export const useFieldCultivations = () => {
  const [fieldCultivations, setFieldCultivations] = useState<
    FieldCultivationData[]
  >([]);

  useEffect(() => {
    const fetchFieldCultivations = async () => {
      try {
        const fieldCultivationData =
          await FieldCultivationService.fetchFieldCultivations();
        setFieldCultivations(fieldCultivationData);
      } catch (error) {
        console.error("Error in fetching  field cultivations", error);
      }
    };

    fetchFieldCultivations();
  }, []);

  return fieldCultivations;
};
