import { CreateFieldCultivationFormData } from "../components/statics/interfaces";
const apiUrl = "http://localhost:3000/field-process";

const FieldCultivationService = {
  fetchFieldCultivations: async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const fieldCultivationData = await response.json();
      return fieldCultivationData;
    } catch (error) {
      console.error("Error in fetching field cultivations", error);
      throw error;
    }
  },
  createFieldCultivation: async (
    fieldCultivation: CreateFieldCultivationFormData
  ) => {
    try {
      const response = await fetch(`${apiUrl}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(fieldCultivation),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Backend error message:", errorData.message);
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during farm creation:", error);
      throw error;
    }
  },
  fetchFieldCultivationsByGrowingPeriodId: async (growingPeriodId: string) => {
    try {
      const url = `${apiUrl}/by-growing-period/${growingPeriodId}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Backend error message:", errorData.message);
        throw new Error(errorData.message);
      }

      const fieldCultivationData = await response.json();
      return fieldCultivationData;
    } catch (error) {
      console.error(
        "Error fetching field cultivations by growing period ID",
        error
      );
      throw error;
    }
  },
  deleteFiieldCultivationById: async (fieldCultivationId: string) => {
    try {
      const response = await fetch(`${apiUrl}/${fieldCultivationId}/soft`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete field cultivation ");
      }

      const fieldCultivation = await response.json();
      return fieldCultivation;
    } catch (error) {
      console.error("Error in deleting field cultivation", error);
      throw error;
    }
  },
  deleteFieldCultivationsByGrowingPeriodId: async (growingPeriodId: string) => {
    try {
      const response = await fetch(
        `${apiUrl}/by-growing-period/${growingPeriodId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete field cultivation ");
      }

      const fieldCultivation = await response.json();
      return fieldCultivation;
    } catch (error) {
      console.error("Error in deleting field cultivation", error);
      throw error;
    }
  },
};

export default FieldCultivationService;
