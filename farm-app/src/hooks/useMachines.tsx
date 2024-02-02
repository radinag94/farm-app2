import { useState, useEffect } from "react";
import MachineService from "../services/MachineService";
export interface MachineData {
  id: string;
  name: string;
  brand: string;
  registerNumber: string;
  farmId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export const useMachines = () => {
  const [machines, setMachines] = useState<MachineData[]>([]);

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const machineData = await MachineService.fetchMachines();
        setMachines(machineData);
      } catch (error) {
        console.error("Error in fetching machines", error);
      }
    };

    fetchMachines();
  }, []);

  return machines;
};
