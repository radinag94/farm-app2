import { MachineFormData } from "../Forms/MachineForm";
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
};

export default MachineService;
