import { useState, useEffect } from "react";
import MachineService from "../services/MachineService";
import { useQuery } from "react-query";
import { MachineData } from "../components/statics/interfaces";



export const useMachines = () => {
  const {
    data: machines,
    error,
    isLoading,
    isError,
  } = useQuery<MachineData[], Error>("fields", MachineService.fetchMachines, {
    retry: 1,
  });

  return { machines, isLoading, isError, error };
};
