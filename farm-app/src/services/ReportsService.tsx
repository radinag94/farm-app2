const apiUrl = "http://localhost:3000/reports";

const ReportsService = {
  fetchCountOfFieldsPerFarmAndCrops: async () => {
    try {
      const response = await fetch(
        `${apiUrl}/count-of-fields-perfarmandcrops`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const countOfFieldsReport = await response.json();
      return countOfFieldsReport;
    } catch (error) {
      console.error("Error in fetching report", error);
      throw error;
    }
  },
  fetchMostCommonSoilType: async () => {
    try {
      const response = await fetch(`${apiUrl}/most-common-soiltype`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const mostCommonSoilType = await response.json();
      return mostCommonSoilType;
    } catch (error) {
      console.error("Error in fetching report", error);
      throw error;
    }
  },
  fetchFarmsWithMostMachines: async () => {
    try {
      const response = await fetch(`${apiUrl}/farms-with-most-machines`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const farmsWithMostMachines = await response.json();
      return farmsWithMostMachines;
    } catch (error) {
      console.error("Error in fetching report", error);
      throw error;
    }
  },
};

export default ReportsService;
