import FarmService from "../services/farmService";
import { useQuery } from "react-query";
export interface FarmData {
  id: string;
  name: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export const useFarms = () => {
  const {
    data: farms,
    error,
    isLoading,
    isError,
  } = useQuery<FarmData[], Error>("farms", FarmService.fetchFarms, {
    retry: 1,
  });
  return { farms, isLoading, isError, error };
};
