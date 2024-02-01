import { FieldFormData } from "../Forms/FieldForm";

const apiUrl = "http://localhost:3000/field";

const FieldService = {
  fetchFields: async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const fieldData = await response.json();
      return fieldData;
    } catch (error) {
      console.error("Error in fetching fields", error);
      throw error;
    }
  },
  createField: async (fieldFormData: FieldFormData) => {
    try {
      const response = await fetch(`${apiUrl}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(fieldFormData),
      });

      if (!response.ok) {
        throw new Error("Failed to create field");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during field creation:", error);
      throw new Error("Failed to create field");
    }
  },
};

export default FieldService;
