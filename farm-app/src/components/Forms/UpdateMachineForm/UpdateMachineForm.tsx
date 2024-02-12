import React from "react";
import { useFormik } from "formik";
import Input from "../../../ui-elements/input";
import { MachineFormData } from "../../statics/interfaces";
import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import MachineService from "../../../services/MachineService";
import { machineValidationSchema } from "../../statics/form-validations";
import {
  UpdateMachineFormContainer,
  StyledUpdateMachineFormContainer,
} from "./UpdateMachineForm.style";
import { useFarms } from "../../../hooks/useFarms";
import {
  UpdateMachineFormProps,
  UpdateMachineFormValues,
} from "../../statics/interfaces";
import SubmitFormButton from "../../../ui-elements/submitFormButton";


const UpdateMachineForm: React.FC<UpdateMachineFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const { farms = [] } = useFarms();
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState<UpdateMachineFormValues>({
    name: "",
    brand: "",
    registerNumber: "",
    farmId: "",
    error: "",
  });

  useEffect(() => {
    const fetchMachineDetails = async () => {
      try {
        if (id) {
          const data = await MachineService.fetchMachineById(id);
          setInitialValues({
            name: data.name || "",
            brand: data.brand || "",
            registerNumber: data.registerNumber || "",
            farmId: data.farmId || "",
            error: data.error,
          });
        }
      } catch (error) {
        console.error("Error fetching farm details:", error);
      }
    };

    fetchMachineDetails();
  }, [id]);

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: machineValidationSchema,
    onSubmit: async (values, { setSubmitting, setFieldError, resetForm }) => {
      try {
        const updateMachineData: MachineFormData = {
          name: values.name,
          brand: values.brand,
          registerNumber: values.registerNumber,
          farmId: values.farmId,
          error: "",
        };

        await MachineService.updateMachine(id, updateMachineData);
        resetForm();
        navigate(`/machine/${id}`);
      } catch (error) {
        console.error("Failed to update machine:", error);
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
    <StyledUpdateMachineFormContainer>
      <UpdateMachineFormContainer>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Machine Name</label>
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
            <label htmlFor="brand">Brand</label>
            <Input
              name="brand"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.brand}
            />
            {formik.touched.brand && formik.errors.brand ? (
              <div>{formik.errors.brand}</div>
            ) : null}
          </div>
          <label htmlFor="registerNumber">Register Number</label>
          <Input
            name="registerNumber"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.registerNumber}
          />
          {formik.touched.registerNumber && formik.errors.registerNumber ? (
            <div>{formik.errors.registerNumber}</div>
          ) : null}

          {formik.errors.error && (
            <div className="error-message">{formik.errors.error}</div>
          )}
          <label htmlFor="farmId">Farm</label>
          <select
            id="farmId"
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
          <SubmitFormButton
            label="Update Machine"
            color="#97a97c"
            type="submit"
            disabled={formik.isSubmitting}
          />
        </form>
      </UpdateMachineFormContainer>
    </StyledUpdateMachineFormContainer>
  );
};

export default UpdateMachineForm;
