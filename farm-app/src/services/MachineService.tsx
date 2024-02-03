import { MachineFormData } from "../components/statics/interfaces";
const apiUrl = "http://localhost:3000/machine";

const MachineService = {
  fetchMachines: async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const machineData = await response.json();
      return machineData;
    } catch (error) {
      console.error("Error in fetching machines", error);
      throw error;
    }
  },
  createFarm: async (machineFormData: MachineFormData) => {
    try {
      const response = await fetch(`${apiUrl}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(machineFormData),
      });

      if (!response.ok) {
        throw new Error("Failed to create machine");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during machine creation:", error);
      throw new Error("Failed to create machine");
    }
  },
  fetchMachinesByFarmId: async (farmId: string) => {
    try {
      const response = await fetch(`${apiUrl}/byFarmId/${farmId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch machines by farm ID");
      }

      const machines = await response.json();
      return machines;
    } catch (error) {
      console.error("Error in fetching machines by farm ID", error);
      throw error;
    }
  },
};

export default MachineService;
