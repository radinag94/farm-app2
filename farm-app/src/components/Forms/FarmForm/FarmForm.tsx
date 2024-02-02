import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "../../../ui-elements/button";
import Input from "../../../ui-elements/input";
import FarmService from "../../../services/farmService";
import { FarmFormProps } from "../../statics/interfaces";
import { FarmFormData } from "../../statics/interfaces";
import { FarmFormContainer } from "./FarmForm.style";


const FarmForm: React.FC<FarmFormProps> = ({ onSubmit }) => {
  const [farmFormData, setFarmFormData] = useState<FarmFormData>({
    name: "",
    latitude: 0,
    longitude: 0,
    error: "",
  });
  // const navigate = useNavigate();
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
      // navigate('/farm');
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
        <Button label="Create Farm" color="#96db80" />
      </form>
    </FarmFormContainer>
  );
};

export default FarmForm;
