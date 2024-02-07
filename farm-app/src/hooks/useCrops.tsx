import CropService from "../services/CropService";
import { CropData } from "../components/statics/interfaces";
import { useQuery } from "react-query";

export const useCrops = () => {
  const {
    data: crops,
    error,
    isLoading,
    isError,
    refetch: fetchCrops,
  } = useQuery<CropData[], Error>("crops", CropService.fetchCrops, {
    retry: 1,
  });
  return { crops, fetchCrops, isLoading, isError, error };
};
