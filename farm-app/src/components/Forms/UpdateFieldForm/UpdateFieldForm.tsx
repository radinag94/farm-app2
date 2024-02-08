import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../ui-elements/button";
import { useFarms } from "../../../hooks/useFarms";
import { useSoils } from "../../../hooks/useSoils";
import FieldService from "../../../services/FieldService";
import { FieldFormData } from "../../statics/interfaces";
import { UpdateFieldFormContainer } from "./UpdateFieldForm.style";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { updateFieldFormSchema } from "../../statics/form-validations";
import { UpdateFieldFormValues } from "../../statics/interfaces";

const UpdateFieldForm = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { farms = [] } = useFarms();
  const { soils = [] } = useSoils();
  const [initialValues, setInitialValues] = useState<UpdateFieldFormValues>({
    name: "",
    fieldArea: 0,
    soilId: "",
    farmId: "",
    coordinates: "",
    error: "",
  });

  useEffect(() => {
    const fetchFieldDetails = async () => {
      try {
        if (id) {
          const data = await FieldService.fetchFieldById(id);
          setInitialValues({
            name: data.name || "",
            fieldArea: data.fieldArea || 0,
            soilId: data.soilId || "",
            farmId: data.farmId || "",
            coordinates: JSON.stringify(data.shape.coordinates) || "",
            error: "",
          });
        }
      } catch (error) {
        console.error("Error fetching field details:", error);
      }
    };

    fetchFieldDetails();
  }, [id]);

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: updateFieldFormSchema,
    onSubmit: async (values, { setSubmitting, setFieldError, resetForm }) => {
      try {
        const fieldData: FieldFormData = {
          name: values.name,
          shape: {
            type: "Polygon",
            coordinates: JSON.parse(values.coordinates),
          },
          fieldArea: values.fieldArea,
          farmId: values.farmId,
          soilId: values.soilId,
        };

        const updatedField = await FieldService.updateField(id, fieldData);
        if (updatedField.message) {
          throw new Error(updatedField.message);
        }
        alert("Field updated successfully");
        resetForm();
        navigate(`/field/${id}`);
      } catch (error) {
        console.error("Error in Field Form submit", error);
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.";
        setFieldError("error", errorMessage);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <UpdateFieldFormContainer>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Field Name:</label>
        <input
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div>{formik.errors.name}</div>
        )}

        <label htmlFor="fieldArea">Field Area:</label>
        <input
          name="fieldArea"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fieldArea}
        />
        {formik.touched.fieldArea && formik.errors.fieldArea && (
          <div>{formik.errors.fieldArea}</div>
        )}

        <label htmlFor="soilId">Soil Type:</label>
        <select
          name="soilId"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.soilId}
        >
          <option value="" disabled>
            Select a Soil
          </option>
          {soils.map((soil) => (
            <option key={soil.id} value={soil.id}>
              {soil.type}
            </option>
          ))}
        </select>
        {formik.touched.soilId && formik.errors.soilId && (
          <div>{formik.errors.soilId}</div>
        )}

        <label htmlFor="farmId">Farm:</label>
        <select
          name="farmId"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.farmId}
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
        {formik.touched.farmId && formik.errors.farmId && (
          <div>{formik.errors.farmId}</div>
        )}

        <label htmlFor="coordinates">Shape Coordinates:</label>
        <input
          name="coordinates"
          type="text"
          placeholder="Enter coordinates separated by commas"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.coordinates}
        />
        {formik.touched.coordinates && formik.errors.coordinates && (
          <div>{formik.errors.coordinates}</div>
        )}
        {formik.errors.error && (
          <div className="error-message">{formik.errors.error}</div>
        )}

        <Button
          label="Update Field"
          color="#96db80"
          type="submit"
          disabled={formik.isSubmitting}
        />
      </form>
    </UpdateFieldFormContainer>
  );
};

export default UpdateFieldForm;
