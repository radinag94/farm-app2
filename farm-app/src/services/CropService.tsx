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
};

export default CropService;
