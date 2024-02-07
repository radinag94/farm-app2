import SoilService from "../services/SoilService";
import { useQuery } from "react-query";
import { SoilData } from "../components/statics/interfaces";

export const useSoils = () => {
  const {
    data: soils,
    error,
    isLoading,
    isError,
    refetch: fetchSoils,
  } = useQuery<SoilData[], Error>("soils", SoilService.fetchSoils, {
    retry: 1,
  });
  return { soils, fetchSoils, isLoading, isError, error };
};
