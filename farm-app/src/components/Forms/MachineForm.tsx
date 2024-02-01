import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import Button from "../../ui-elements/button";
import Input from "../../ui-elements/input";
import FarmService from "../farm/farmService";
import MachineService from "../machine/MachineService";
import { useFarms } from "../hooks/useFarms";

interface MachineFormProps {
  onSubmit: (machineData: MachineFormData) => void;
}

export interface MachineFormData {
  name: string;
  brand: string;
  registerNumber: string;
  farmId: string;
  error: string;
}

const MachineFormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: center;

    input {
      padding: 8px;
      margin-top: 5px;
    }
  }
`;

const MachineForm: React.FC<MachineFormProps> = ({ onSubmit }) => {
    const farms = useFarms()
  const [machineFormData, setMachineFormData] = useState<MachineFormData>({
    name: "",
    brand: "",
    registerNumber: "",
    farmId: "",
    error: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = /^\d*\.?\d+$/.test(value) ? parseFloat(value) : value;

    setMachineFormData({ ...machineFormData, [name]: numericValue, error: "" });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (
        !machineFormData.name ||
        !machineFormData.brand ||
        !machineFormData.registerNumber ||
        !machineFormData.farmId
      ) {
        setMachineFormData({
          ...machineFormData,
          error: "Please fill in all fields",
        });
        return;
      }

      const createdFarm = await MachineService.createFarm(machineFormData);
      setMachineFormData({
        name: "",
        brand: "",
        registerNumber: "",
        farmId:"",
        error: "",
      });
      onSubmit(createdFarm);

      alert("You created a new machine");
    } catch (error) {
      console.error("Error in machine form  submit", error);
    }
  };

  return (
    <MachineFormContainer>
      <form onSubmit={handleSubmit}>
        <label>Machine name:</label>
        <Input
          onChange={handleChange}
          value={machineFormData.name}
          type="text"
          name="name"
        />
        <label>Brand:</label>
        <Input
          onChange={handleChange}
          value={machineFormData.brand}
          type="text"
          name="brand"
        />
        <label>Register number:</label>
        <Input
          onChange={handleChange}
          value={machineFormData.registerNumber}
          type="text"
          name="registerNumber"
        />
          <label>Farm:</label>
        <select
          onChange={handleChange}
          value={machineFormData.farmId}
          name="farmId"
        >
          <option value="" disabled>
            Select a Farm
          </option>
          {farms.map((farm) => (
            <option key={farm.id} value={farm.id}>
              {farm.name}
            </option>
          ))}
        </select>
        {machineFormData.error && (
          <p className="error-message">{machineFormData.error}</p>
        )}
        <Button
          label="Create Machine"
          color="#96db80"
        //   onClick={function (): void {
        //     throw new Error("Function not implemented.");
        //   }}
        />
      </form>
    </MachineFormContainer>
  );
};

export default MachineForm;
