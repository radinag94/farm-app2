import { UpdateMachineFormValues } from "../components/Forms/UpdateMachineForm/UpdateMachineForm";
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
  createMachine: async (machineFormData: MachineFormData) => {
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
        const errorData = await response.json();
        console.log("Backend error message:", errorData.message);
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during machine creation:", error);
      throw error;
    }
  },
  fetchMachineById: async (machineId: string) => {
    try {
      const response = await fetch(`${apiUrl}/${machineId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch machine details");
      }

      const machineDetails = await response.json();
      return machineDetails;
    } catch (error) {
      console.error("Error in fetching machine details", error);
      throw error;
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
  fetchMachinesByFieldId: async (fieldId: string) => {
    try {
      const response = await fetch(`${apiUrl}/byFieldId/${fieldId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch machines by field ID");
      }

      const machines = await response.json();
      return machines;
    } catch (error) {
      console.error("Error in fetching machines by field ID", error);
      throw error;
    }
  },
  fetchFarmByMachineId: async (machineId: string) => {
    try {
      const response = await fetch(`${apiUrl}/byMachineId/${machineId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch farm by machine ID");
      }

      const farm = await response.json();
      return farm;
    } catch (error) {
      console.error("Error in fetching farm by machine ID", error);
      throw error;
    }
  },
  updateMachine: async (
    machineId: string,
    machineFormData: UpdateMachineFormValues
  ) => {
    try {
      const response = await fetch(`${apiUrl}/${machineId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(machineFormData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Backend error message:", errorData.message);
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during machine update:", error);
      throw error;
    }
  },
  deleteMachineById: async (machineId: string) => {
    try {
      const response = await fetch(`${apiUrl}/${machineId}/soft`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete machine details and machine ");
      }

      const machine = await response.json();
      return machine;
    } catch (error) {
      console.error("Error in deleting machine details", error);
      throw error;
    }
  },
};

export default MachineService;
