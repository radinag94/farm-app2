import { ProcessTypeData } from "../components/statics/interfaces";

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
  createProcessType: async (processType: ProcessTypeData) => {
    try {
      const response = await fetch(`${apiUrl}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(processType),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Backend error message:", errorData.message);
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during process type creation:", error);
      throw error;
    }
  },
  deleteProcessTypeById: async (processTypeId: string) => {
    try {
      const response = await fetch(`${apiUrl}/${processTypeId}/soft`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete process type ");
      }

      const processType = await response.json();
      return processType;
    } catch (error) {
      console.error("Error in deleting process type", error);
      throw error;
    }
  },
};

export default ProcessTypeService;
