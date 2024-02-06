import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Input from "../../../ui-elements/input";
import { ErrorMessage } from "formik";
import Button from "../../../ui-elements/button";
import FarmService from "../../../services/farmService";
import { FarmFormData } from "../../statics/interfaces";
import { UpdateFarmFormContainer } from "./UpdateFarmForm.style";

interface FormValues {
  name: string;
  latitude: string;
  longitude: string;
  error: "";
}

interface UpdateFarmFormProps {
  id: string;
}

const UpdateFarmForm: React.FC<UpdateFarmFormProps> = ({ id }) => {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<FormValues>({
    name: "",
    latitude: "",
    longitude: "",
    error: "",
  });

  useEffect(() => {
    const fetchFarmDetails = async () => {
      try {
        if (id) {
          const data = await FarmService.fetchFarmById(id);
          setInitialValues({
            name: data.name || "",
            latitude:
              data.location && data.location.coordinates
                ? data.location.coordinates[1].toString()
                : "",
            longitude:
              data.location && data.location.coordinates
                ? data.location.coordinates[0].toString()
                : "",
            error: data.error,
          });
        }
      } catch (error) {
        console.error("Error fetching farm details:", error);
      }
    };

    fetchFarmDetails();
  }, [id]);

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "The farm name you provided is too short")
        .max(20, "The farm name you provided is too long"),
      latitude: Yup.string()
        .matches(/^-?\d+(\.\d+)?$/, "Invalid latitude value")
        .test("is-valid-latitude", "Invalid latitude value", (value) => {
          // Explicitly return true or false
          return !value ||
            (value &&
              !isNaN(parseFloat(value)) &&
              parseFloat(value) >= -90 &&
              parseFloat(value) <= 90)
            ? true
            : false;
        }),
      longitude: Yup.string()
        .matches(/^-?\d+(\.\d+)?$/, "Invalid longitude value")
        .test("is-valid-longitude", "Invalid longitude value", (value) => {
          // Explicitly return true or false
          return !value ||
            (value &&
              !isNaN(parseFloat(value)) &&
              parseFloat(value) >= -180 &&
              parseFloat(value) <= 180)
            ? true
            : false;
        }),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError, resetForm }) => {
      try {
        // latitude and longitude are converted to numbers
        const latitude = parseFloat(values.latitude);
        const longitude = parseFloat(values.longitude);

        //latitude and longitude to ensure they are numbers; crucial as parseFloat
        // could return NaN if the input is not a valid number.
        if (isNaN(latitude) || isNaN(longitude)) {
          console.error("Latitude or longitude is not a valid number.");
          return;
        }

        const payload: FarmFormData = {
          name: values.name,
          latitude: latitude,
          longitude: longitude,
          error: "",
        };

        await FarmService.updateFarm(id, payload);
        resetForm();
        navigate(`/farm/${id}`);
      } catch (error) {
        console.error("Failed to update farm:", error);
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
    <UpdateFarmFormContainer>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Farm Name</label>
        <Input
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <div>
          <label htmlFor="latitude">Latitude</label>
          <Input
            name="latitude"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.latitude}
          />
          {formik.touched.latitude && formik.errors.latitude ? (
            <div>{formik.errors.latitude}</div>
          ) : null}
        </div>
          <label htmlFor="longitude">Longitude</label>
          <Input
            name="longitude"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.longitude}
          />
          {formik.touched.longitude && formik.errors.longitude ? (
            <div>{formik.errors.longitude}</div>
          ) : null}
          {formik.errors.error && (
            <div className="error-message">{formik.errors.error}</div>
          )}
        <Button
          type="submit"
          label="Update farm"
          color="#96db80"
          disabled={formik.isSubmitting}
        />
      </form>
    </UpdateFarmFormContainer>
  );
};

export default UpdateFarmForm;
