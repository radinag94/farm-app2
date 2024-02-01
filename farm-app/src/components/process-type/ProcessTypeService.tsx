const apiUrl = "http://localhost:3000/process-type";

const ProcessTypeService = {
  fetchProcessTypes: async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const processTypeData = await response.json();
      return processTypeData;
    } catch (error) {
      console.error("Error in fetching process types", error);
      throw error;
    }
  },
};

export default ProcessTypeService;
