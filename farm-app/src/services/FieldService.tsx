import { FieldFormData } from "../components/statics/interfaces";

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
        const errorData = await response.json();
        console.log("Backend error message:", errorData.message);
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during field creation:", error);
      throw error;
    }
  },
  fetchFieldById: async (fieldId: string) => {
    try {
      const response = await fetch(`${apiUrl}/${fieldId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch field details");
      }

      const fieldDetails = await response.json();
      return fieldDetails;
    } catch (error) {
      console.error("Error in fetching field details", error);
      throw error;
    }
  },
  deleteFieldById: async (fieldId: string) => {
    try {
      const response = await fetch(`${apiUrl}/${fieldId}/soft`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete field details and farm ");
      }

      const field = await response.json();
      return field;
    } catch (error) {
      console.error("Error in deleting field details", error);
      throw error;
    }
  },
  fetchFieldsByFarmId: async (farmId: string) => {
    try {
      const response = await fetch(`${apiUrl}/byFarmId/${farmId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch fields by farm ID");
      }

      const fields = await response.json();
      return fields;
    } catch (error) {
      console.error("Error in fetching fields by farm ID", error);
      throw error;
    }
  },
  updateField: async (fieldId: string, fieldFormData: FieldFormData) => {
    try {
      const response = await fetch(`${apiUrl}/${fieldId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(fieldFormData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Backend error message:", errorData.message);
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during farm update:", error);
      throw error;
    }
  },
  fetchFarmByFieldId: async (fieldId: string) => {
    try {
      const response = await fetch(`${apiUrl}/byFieldId/${fieldId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch farm by field ID");
      }

      const farm = await response.json();
      return farm;
    } catch (error) {
      console.error("Error in fetching farm by field ID", error);
      throw error;
    }
  },
};

export default FieldService;
