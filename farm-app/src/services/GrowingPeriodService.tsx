const apiUrl = "http://localhost:3000/growing-period";
import { GrowingPeriodData } from "../components/statics/interfaces";
const GrowingPeriodService = {
  fetchGrowingPeriods: async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const growingPeriodData = await response.json();
      return growingPeriodData;
    } catch (error) {
      console.error("Error in fetching growing periods", error);
      throw error;
    }
  },
  fetchGrowingPeriodsByFieldId: async (fieldId: string) => {
    try {
      const response = await fetch(`${apiUrl}/${fieldId}/growing-periods`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const growingPeriodData = await response.json();
      return growingPeriodData;
    } catch (error) {
      console.error("Error in fetching growing periods by field ID", error);
      throw error;
    }
  },

  createGrowingPeriod: async (growingPeriod: GrowingPeriodData) => {
    try {
      const response = await fetch(`${apiUrl}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(growingPeriod),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Backend error message:", errorData.message);
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during growing period creation:", error);
      throw error;
    }
  },
};

export default GrowingPeriodService;
