import { CropData } from "../components/statics/interfaces";

const apiUrl = "http://localhost:3000/crop";

const CropService = {
  fetchCrops: async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const cropData = await response.json();
      return cropData;
    } catch (error) {
      console.error("Error in fetching crops", error);
      throw error;
    }
  },
  createCrop: async (cropData: CropData) => {
    console.log("dsdssdsdsds")
    try {
      const response = await fetch(`${apiUrl}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(cropData),
      });

      if (!response.ok) {
        console.log("dsdssdsdsds")
        const errorData = await response.json();
        console.log(errorData.message)
        if (response.status === 400 && errorData.statusCode === 400) {
          throw new Error(errorData.message || "Failed to create crop");
        }
        throw new Error(errorData.message || "Failed to create crop");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during crop creation:", error);
      throw new Error("Failed to create crop");
    }
  },
  deleteCropById: async (cropId: string) => {
    try {
      const response = await fetch(`${apiUrl}/${cropId}/soft`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete crop ");
      }

      const crop = await response.json();
      return crop;
    } catch (error) {
      console.error("Error in deleting crop", error);
      throw error;
    }
  },
};

export default CropService;
