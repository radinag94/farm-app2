import { useState, useEffect } from "react";
import MachineService from "../services/MachineService";
import { MachineData } from "../components/statics/interfaces";

const useMachinesByFieldId = (fieldId: string) => {
  const [machines, setMachines] = useState<MachineData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchMachinesByFieldId = async () => {
      setLoading(true);
      try {
        const machinesData = await MachineService.fetchMachinesByFieldId(
          fieldId
        );
        setMachines(machinesData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (fieldId) {
      fetchMachinesByFieldId();
    }
  }, [fieldId]);

  return { machines, loading, error };
};

export default useMachinesByFieldId;
