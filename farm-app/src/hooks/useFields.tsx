import FieldService from "../services/FieldService";
import { useQuery } from "react-query";
import { FieldData } from "../components/statics/interfaces";

export const useFields = () => {
  const {
    data: fields,
    error,
    isLoading,
    isError,
  } = useQuery<FieldData[], Error>("fields", FieldService.fetchFields, {
    retry: 1,
  });

  return { fields, isLoading, isError, error };
};
