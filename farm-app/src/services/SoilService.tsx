import { SoilData } from "../components/statics/interfaces";

const apiUrl = "http://localhost:3000/soil";

const SoilService = {
  fetchSoils: async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const soilData = await response.json();
      return soilData;
    } catch (error) {
      console.error("Error in fetching soils", error);
      throw error;
    }
  },
  fetchSoilById: async (soilId:string) => {
    try {
      const response = await fetch(`${apiUrl}/${soilId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const soil = await response.json();
      return soil;
    } catch (error) {
      console.error("Error in fetching soil", error);
      throw error;
    }
  },
  createSoil: async (soilData:SoilData) => {
    try {
      const response = await fetch(`${apiUrl}/add-soil`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(soilData),
      });

      if (!response.ok) {
        throw new Error(`Failed to create soil: ${response.status}`);
      }

      const createdSoil = await response.json();
      return createdSoil;
    } catch (error) {
      console.error("Error in creating soil", error);
      throw error;
    }
  },
  deleteSoilById: async (soilId: string) => {
    try {
      const response = await fetch(`${apiUrl}/${soilId}/soft`, {
        method: "DELETE",
        headers: {  
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete soil ");
      }

      const crop = await response.json();
      return crop;
    } catch (error) {
      console.error("Error in deleting soil", error);
      throw error;
    }
  },
};

export default SoilService;
