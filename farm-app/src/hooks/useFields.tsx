import { useState, useEffect } from "react";
import FieldService from "../services/FieldService";
// export interface FieldData {
//   id: string;
//   name: string;
//   shape: {
//     type: "Polygon" | "Multypolygon";
//     coordinates: number[][][] | number[][][][];
//   };
//   fieldArea: number;
//   soilId: string;
//   farmId: string;
//   createdAt: string;
//   updatedAt: string;
//   deletedAt: string | null;
// }

import { FieldData } from "../components/statics/interfaces";
export const useFields = () => {
  const [fields, setFields] = useState<FieldData[]>([]);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const fieldData = await FieldService.fetchFields();
        setFields(fieldData);
      } catch (error) {
        console.error("Error in fetching fields", error);
      }
    };

    fetchFields();
  }, []);

  return fields;
};
