import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Button from "../../../ui-elements/button";
import Input from "../../../ui-elements/input";
import FieldService from "../../../services/FieldService";
import { useFarms } from "../../../hooks/useFarms";
import { useSoils } from "../../../hooks/useSoils";
import { FieldFormProps } from "../../statics/interfaces";
import { FieldFarmContainer } from "./FieldForm.style";
import { FieldFormData } from "../../statics/interfaces";




const FieldForm: React.FC<FieldFormProps> = ({ onSubmit }) => {
  const {farms=[]} = useFarms();
  const {soils=[]} = useSoils()

  const [name, setName] = useState("");
  const [fieldArea, setFieldArea] = useState<number>(0);
  const [soilId, setSoilId] = useState("");
  const [farmId, setFarmId] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const numericValue = /^\d*\.?\d+$/.test(value) ? parseFloat(value) : value;

    switch (name) {
      case "name":
        setName(value);
        break;
        case "fieldArea":
          setFieldArea(
            typeof numericValue === "number" && !isNaN(numericValue)
              ? numericValue
              : 0
          );
        break;
      case "soilId":
        setSoilId(value);
        break;
      case "farmId":
        setFarmId(value);
        break;
      default:
        break;
    }
  };

  const handleShapeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCoordinates(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const fieldData: FieldFormData = {
        name,
        shape: {
          type: "Polygon",
          coordinates: JSON.parse(coordinates),
        },
        fieldArea,
        soilId,
        farmId,
      };

      if (
        !fieldData.name ||
        !fieldData.fieldArea ||
        !fieldData.soilId ||
        !fieldData.farmId
      ) {
        setError("Please fill in all required fields");
        return;
      }

      const createdField = await FieldService.createField(fieldData);

      onSubmit(createdField);

      alert("You created a new field");
    } catch (error) {
      console.error("Error in Field Form submit", error);
    }
  };

  return (
    <FieldFarmContainer>
      <form onSubmit={handleSubmit}>
        <label>Field Name:</label>
        <Input onChange={handleChange} value={name} type="text" name="name" />
        <label>Field Area:</label>
        <Input
          onChange={handleChange}
          value={fieldArea}
          type="number"
          name="fieldArea"
        />
        <label>Soil Type:</label>
        <select onChange={handleChange} value={soilId} name="soilId">
          <option value="" disabled>
            Select a Soil
          </option>
          {soils.map((soil) => (
            <option key={soil.id} value={soil.id}>
              {soil.type}
            </option>
          ))}
        </select>
        <label>Farm:</label>
        <select onChange={handleChange} value={farmId} name="farmId">
          <option value="" disabled>
            Select a Farm
          </option>
          {farms.map((farm) => (
            <option key={farm.id} value={farm.id}>
              {farm.name}
            </option>
          ))}
        </select>
        <label>Shape Coordinates:</label>
        <Input
          onChange={handleShapeChange}
          placeholder="Enter coordinates separated by commas"
          type="text"
          name="shape"
        />
        {error && <p className="error-message">{error}</p>}
        <Button label="Create Field" color="#96db80" />
      </form>
    </FieldFarmContainer>
  );
};

export default FieldForm;
