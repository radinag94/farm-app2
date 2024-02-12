import { FieldCultivationData } from "../components/statics/interfaces";
import { useState, useEffect } from "react";
import FieldCultivationService from "../services/FieldCultivationService";

const useFieldCultivationsByGrowingPeriodId = (growingPeriodId: string) => {
  const [
    fieldCultivationsByGrowingPeriodId,
    setFieldCultivationsByGrowingPeriodId,
  ] = useState<FieldCultivationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  useEffect(() => {
    const fetchFieldCultivationsByGrowingPeriodId = async () => {
      try {
        const fieldCultivationData =
          await FieldCultivationService.fetchFieldCultivationsByGrowingPeriodId(
            growingPeriodId
          );
        setFieldCultivationsByGrowingPeriodId(fieldCultivationData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (growingPeriodId) {
      fetchFieldCultivationsByGrowingPeriodId();
    }
  }, [growingPeriodId]);

  return { fieldCultivationsByGrowingPeriodId, loading, error };
};
export default useFieldCultivationsByGrowingPeriodId;
