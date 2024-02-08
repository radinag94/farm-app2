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
};

export default FieldCultivationService;
