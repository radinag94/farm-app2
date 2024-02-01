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
};

export default FieldCultivationService;
