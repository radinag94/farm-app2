import { FarmData } from "../pages/HomePage/HomePage";
import { FarmFormData } from "../components/Forms/FarmForm/FarmForm";

const apiUrl = "http://localhost:3000/farm";

const FarmService = {
  fetchFarms: async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const farmData = await response.json();
      return farmData;
    } catch (error) {
      console.error("Error in fetching farms", error);
      throw error;
    }
  },
  createFarm: async (farmFormData: FarmFormData) => {
    try {
      const response = await fetch(`${apiUrl}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(farmFormData),
      });

      if (!response.ok) {
        throw new Error("Failed to create farm");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during farm creation:", error);
      throw new Error("Failed to create farm");
    }
  },
  fetchFarmById: async (farmId: string) => {
    try {
      const response = await fetch(`${apiUrl}/${farmId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch farm details");
      }

      const farmDetails = await response.json();
      return farmDetails;
    } catch (error) {
      console.error("Error in fetching farm details", error);
      throw error;
    }
  },
  deleteFarmById: async (farmId: string) => {
    try {
      const response = await fetch(`${apiUrl}/${farmId}/soft`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete farm details and farm ");
      }

      const farm = await response.json();
      return farm;
    } catch (error) {
      console.error("Error in deleting farm details", error);
      throw error;
    }
  },
};

export default FarmService;
