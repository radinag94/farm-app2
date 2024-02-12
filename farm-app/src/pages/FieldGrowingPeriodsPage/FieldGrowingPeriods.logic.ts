import {
  CropData,
  FieldData,
  GrowingPeriodData,
} from "../../components/statics/interfaces";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FieldService from "../../services/FieldService";
import { FarmData } from "../../components/statics/interfaces";
import { useQuery, QueryClient } from "react-query";
import CropService from "../../services/CropService";
import GrowingPeriodService from "../../services/GrowingPeriodService";

const queryClient = new QueryClient();

export const useFieldGrowingPeriodPageLogic = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const fieldDetailsQueryKey = ["fieldDetails", id];
  const associatedFarmQueryKey = ["associatedFarm", id];
  const associatedCropQueryKey = ["associatedCrops", id];
  const associatedGrowingPeriodsQueryKey = ["associatedGrowingPeriods", id];

  const {
    data: fieldDetails,
    error,
    isLoading,
  } = useQuery<FieldData | null, Error>(fieldDetailsQueryKey, async () => {
    if (id) {
      const data = await FieldService.fetchFieldById(id);
      return data;
    }
    return null;
  });

  const { data: associatedFarm } = useQuery<FarmData | null, Error>(
    associatedFarmQueryKey,
    async () => {
      if (id) {
        const farm = await FieldService.fetchFarmByFieldId(id);
        return farm;
      }
      return null;
    }
  );
  const { data: associatedCrops } = useQuery<CropData[] | null, Error>(
    associatedCropQueryKey,
    async () => {
      if (id) {
        const crops = await CropService.fetchCropsByFieldId(id);
        return crops;
      }
      return null;
    }
  );

  const { data: associatedGrowingPeriods } = useQuery<
    GrowingPeriodData[] | null,
    Error
  >(associatedGrowingPeriodsQueryKey, async () => {
    if (id) {
      const growingPeriods =
        await GrowingPeriodService.fetchGrowingPeriodsByFieldId(id);
      return growingPeriods;
    }
    return null;
  });

  const handleDeleteField = async () => {
    try {
      if (id) {
        await FieldService.deleteFieldById(id);
        queryClient.invalidateQueries(fieldDetailsQueryKey);
        navigate("/field");
      }
    } catch (error) {
      console.error("Error deleting field:", error);
    }
  };

  return {
    fieldDetails,
    handleDeleteField,
    associatedFarm,
    isLoading,
    error,
    associatedCrops,
    associatedGrowingPeriods,
  };
};
