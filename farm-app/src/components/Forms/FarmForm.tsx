import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import Button from "../../ui-elements/button";
import Input from "../../ui-elements/input";
import FarmService from "../farm/farmService";

interface FarmFormProps {
  onSubmit: (farmData: FarmFormData) => void;
}

export interface FarmFormData {
  name: string;
  latitude: number;
  longitude: number;
  error: string;
}

const FarmFormContainer = styled.div`
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

const FarmForm: React.FC<FarmFormProps> = ({ onSubmit }) => {
  const [farmFormData, setFarmFormData] = useState<FarmFormData>({
    name: "",
    latitude: 0,
    longitude: 0,
    error: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = /^\d*\.?\d+$/.test(value) ? parseFloat(value) : value;

    setFarmFormData({ ...farmFormData, [name]: numericValue, error: "" });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (
        !farmFormData.name ||
        !farmFormData.latitude ||
        !farmFormData.longitude
      ) {
        setFarmFormData({
          ...farmFormData,
          error: "Please fill in all fields",
        });
        return;
      }

      const createdFarm = await FarmService.createFarm(farmFormData);
      setFarmFormData({ name: "", latitude: 0, longitude: 0, error: "" });
      onSubmit(createdFarm);

      alert("You created a new farm");
    } catch (error) {
      console.error("Error in Farm Form submit", error);
    }
  };

  return (
    <FarmFormContainer>
      <form onSubmit={handleSubmit}>
        <label>Farm Name:</label>
        <Input
          onChange={handleChange}
          value={farmFormData.name}
          type="text"
          name="name"
        />
        <label>Latitude:</label>
        <Input
          onChange={handleChange}
          value={farmFormData.latitude}
          type="number"
          name="latitude"
        />
        <label>Longitude:</label>
        <Input
          onChange={handleChange}
          value={farmFormData.longitude}
          type="number"
          name="longitude"
        />
        {farmFormData.error && (
          <p className="error-message">{farmFormData.error}</p>
        )}
        <Button
          label="Create Farm"
          color="#96db80"
          // onClick={function (): void {
          //   throw new Error("Function not implemented.");
          // }}
        />
      </form>
    </FarmFormContainer>
  );
};

export default FarmForm;
