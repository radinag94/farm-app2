import React from "react";
import { useFormik } from "formik";
import Button from "../../../ui-elements/button";
import Input from "../../../ui-elements/input";
import FarmService from "../../../services/farmService";
import { FarmFormProps, FarmFormData } from "../../statics/interfaces";
import { FarmFormContainer } from "./FarmForm.style";
import { farmFormSchema } from "../../statics/form-validations";

const FarmForm: React.FC<FarmFormProps> = ({ onSubmit }) => {
  const formik = useFormik<FarmFormData>({
    initialValues: {
      name: "",
      latitude: 0,
      longitude: 0,
      error: "",
    },
    validationSchema: farmFormSchema,
    onSubmit: async (values, { setSubmitting, setFieldError, resetForm }) => {
      try {
        const response = await FarmService.createFarm(values);
        onSubmit(response);
        resetForm();
        alert("Farm created successfully!");
      } catch (error) {
        console.log("Caught error in form submission:", error);
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.";
        setFieldError("error", errorMessage);
        setSubmitting(false);
      }
    },
  });

  return (
    <FarmFormContainer>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Farm Name:</label>
        <Input
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error-message">{formik.errors.name}</div>
        )}
        <div>
          <label htmlFor="latitude">Latitude:</label>
          <Input
            name="latitude"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.latitude.toString()}
          />
          {formik.touched.latitude && formik.errors.latitude ? (
            <div className="error-message">{formik.errors.latitude}</div>
          ) : null}
        </div>

        <label htmlFor="longitude">Longitude:</label>
        <Input
          name="longitude"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.longitude.toString()}
        />
        {formik.touched.longitude && formik.errors.longitude ? (
          <div className="error-message">{formik.errors.longitude}</div>
        ) : null}
        {formik.errors.error && (
          <div className="error-message">{formik.errors.error}</div>
        )}
        <Button
          type="submit"
          label="Create Farm"
          color="#96db80"
          disabled={formik.isSubmitting}
        />
      </form>
    </FarmFormContainer>
  );
};

export default FarmForm;
