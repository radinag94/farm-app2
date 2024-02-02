const apiUrl = "http://localhost:3000/growing-period";

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
};

export default GrowingPeriodService;
