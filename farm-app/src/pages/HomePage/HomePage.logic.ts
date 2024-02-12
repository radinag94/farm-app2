import { useState, useEffect } from "react";
import ReportsService from "../../services/ReportsService";
import {
  ReportDataItem,
  SoilDataItem,
  MachineDataItem,
} from "../../components/statics/interfaces";
export function flattenCoordinates(coordinates) {
  return coordinates
    .flat(Infinity)
    .map((coordinate) =>
      Array.isArray(coordinate) ? coordinate.join(", ") : coordinate
    )
    .join(" ,");
}

export const useHomePageLogic = () => {
  const [reportData, setReportData] = useState<ReportDataItem[]>([]);
  const [soilData, setSoilData] = useState<SoilDataItem[]>([]);
  const [machineData, setMachineData] = useState<MachineDataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const report = await ReportsService.fetchCountOfFieldsPerFarmAndCrops();
        setReportData(report.report);

        const soilReport = await ReportsService.fetchMostCommonSoilType();
        setSoilData(soilReport.report);

        const machineReport = await ReportsService.fetchFarmsWithMostMachines();
        setMachineData(machineReport.report);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return {
    reportData,
    soilData,
    machineData,
    setMachineData,
    setReportData,
    setSoilData,
  };
};
