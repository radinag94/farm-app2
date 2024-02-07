import { useState, useEffect } from "react";
import ProcessTypeService from "../services/ProcessTypeService";
import { useQuery } from "react-query";
import { ProcessTypeData } from "../components/statics/interfaces";

export const useProcessTypes = () => {
  const {
    data: processTypes,
    error,
    isLoading,
    isError,
    refetch: fetchProcessTypes,
  } = useQuery<ProcessTypeData[], Error>(
    "processType",
    ProcessTypeService.fetchProcessTypes,
    {
      retry: 1,
    }
  );
  return { processTypes, fetchProcessTypes, isLoading, isError, error };
};
