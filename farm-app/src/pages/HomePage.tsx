import React, { useEffect, useState } from "react";
import EmptyList from "../components/EmptyList/EmptyListMessage";
import FarmCard from "../components/FarmCard/FarmCard";
import styled from "styled-components";
import FarmService from "../components/farm/farmService";
import FieldService from "../components/field/FieldService";
import { MachineData, useMachines } from "../components/hooks/useMachines";
import MachineService from "../components/machine/MachineService";
import { useFarms } from "../components/hooks/useFarms";

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

export interface FieldData {
  id: string;
  name: string;
  shape: {
    type: "Polygon" | "Multypolygon";
    coordinates: number[][][] | number[][][][];
  };
  field_area: number;
  soil_id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  h2 {
    color: #25c40c;
    margin-bottom: 20px;
    font-size: 24px;
    width: 100%;
    text-align: center;
  }
`;

function flattenCoordinates(coordinates) {
  return coordinates
    .flat(Infinity)
    .map((coordinate) =>
      Array.isArray(coordinate) ? coordinate.join(", ") : coordinate
    )
    .join(" ,");
}

function HomePage() {
  // const [farms, setFarms] = useState<FarmData[]>([]);
  const [fields, setFields] = useState<FieldData[]>([]);
  // const [machines, setMachines] = useState<MachineData[]>([]);
  const machines = useMachines();
  const farms = useFarms();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const farmsData = await FarmService.fetchFarms();
        const fieldData = await FieldService.fetchFields();
        // setFarms(farmsData);
        setFields(fieldData);
      } catch (error) {
        console.error("Error in HomePage fetchData", error);
      }
    };

    fetchData();
  }, []);

  // const renderedFarms = useMemo(() => {
  //   return farms.map((farm) => <FarmCard key={farm.id} farm={farm} />);
  // }, [farms]);
  return (
    <HomePageContainer>
      <h2>Field List</h2>
      {fields.length > 0 ? (
        fields.map((field) => (
          <div key={field.id}>
            <strong>{field.name}</strong>
            <p>Coordinates: {flattenCoordinates(field.shape.coordinates)}</p>
          </div>
        ))
      ) : (
        <EmptyList message="No fields available. Create a field to get started!" />
      )}
      <h2>Machine List</h2>
      {machines.length > 0 ? (
        machines.map((machine) => {
          const associatedFarm = farms.find(
            (farm) => farm.id === machine.farmId
          );

          return (
            <div key={machine.id}>
              <strong>Name: {machine.name}</strong>
              <p>Brand: {machine.brand}</p>
              <p>Register Number: {machine.registerNumber}</p>
              <p>Farm ID: {machine.farmId}</p>
              {associatedFarm && (
                <div>
                  <p>Farm Name: {associatedFarm.name}</p>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <EmptyList message="No machines available. Create a machine to get started!" />
      )}
    </HomePageContainer>
  );
}

export default HomePage;
