import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "../../../ui-elements/button";
import Input from "../../../ui-elements/input";
import MachineService from "../../../services/MachineService";
import { useFarms } from "../../../hooks/useFarms";
import { MachineFormProps } from "../../statics/interfaces";
import { MachineFormData } from "../../statics/interfaces";
import { MachineFormContainer } from "./MachineForm.style";



const MachineForm: React.FC<MachineFormProps> = ({ onSubmit }) => {
  const {farms=[]} = useFarms();
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
        farmId: "",
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
