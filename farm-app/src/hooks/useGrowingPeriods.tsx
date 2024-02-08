import GrowingPeriodService from "../services/GrowingPeriodService";
import { useQuery } from "react-query";
import { GrowingPeriodData } from "../components/statics/interfaces";

export const useGrowingPeriods = () => {
  const {
    data: growingPeriods,
    error,
    isLoading,
    isError,
    refetch: fetchGrowingPeriods,
  } = useQuery<GrowingPeriodData[], Error>(
    "growingPeriods",
    GrowingPeriodService.fetchGrowingPeriods,
    {
      retry: 1,
    }
  );

  return { growingPeriods,fetchGrowingPeriods, isLoading, isError, error };
};
