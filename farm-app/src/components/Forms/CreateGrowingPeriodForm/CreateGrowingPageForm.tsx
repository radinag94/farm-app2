import React from "react";
import { useFormik } from "formik";
import { StyledCreateGrowingPeriodFormContainer } from "./CreateGrowingPeriodForm.style";
import { FieldCultivationFormContainer } from "../CreateFieldCultivationForm/CreateFieldCultivationForm.style";
import GrowingPeriodService from "../../../services/GrowingPeriodService";
import { useNavigate, useParams } from "react-router";
import { useCrops } from "../../../hooks/useCrops";
import useMachinesByFieldId from "../../../hooks/useMachinesByFieldId";
import { useProcessTypes } from "../../../hooks/useProcessTypes";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SubmitFormButton from "../../../ui-elements/submitFormButton";
import { createGrowingPeriodValidationSchema } from "../../statics/form-validations";
import { ErrorResponse } from "../../statics/interfaces";

const CreateGrowingPeriodForm = ({ onSubmit }) => {
  const { id: fieldId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { crops = [] } = useCrops();
  const {
    processTypes = [],
    isLoading: isLoadingProcessTypes,
    isError: isErrorProcessTypes,
  } = useProcessTypes();
  const { machines } = useMachinesByFieldId(fieldId);

  const formik = useFormik({
    initialValues: {
      fieldId: fieldId,
      cropId: "",
      processTypeId: "",
      machineId: "",
      pDate: new Date(),
      error: "",
    },
    validationSchema: createGrowingPeriodValidationSchema,
    onSubmit: async (values, { setSubmitting, setFieldError, resetForm }) => {
      try {
        const response = await GrowingPeriodService.createGrowingPeriod({
          cropId: values.cropId,
          fieldId: values.fieldId as string,
          processTypeId: values.processTypeId,
          machineId: values.machineId,
          pDate: values.pDate.toISOString(),
          error: values.error,
        });
        alert("Growing Period created successfully");
        onSubmit?.(response);
        navigate(`/field/${fieldId}`);
        resetForm();
      } catch (error) {
        const message =
          (error as ErrorResponse).message || "An unexpected error occurred.";
        console.error("Error in growing period form submit", message);
        setFieldError("general", message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <StyledCreateGrowingPeriodFormContainer>
      <FieldCultivationFormContainer>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="cropId">Crop:</label>
          <select
            id="cropId"
            name="cropId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cropId}
          >
            <option value="" disabled>
              Select a crop
            </option>
            {crops.map((crop) => (
              <option key={crop.id} value={crop.id}>
                {crop.name}
              </option>
            ))}
          </select>
          {formik.touched.cropId && formik.errors.cropId && (
            <div className="error-message">{formik.errors.cropId}</div>
          )}
          <div>
            <label htmlFor="machineId">Machine:</label>
            <select
              name="machineId"
              onChange={formik.handleChange}
              value={formik.values.machineId}
            >
              <option value="">Select a Machine</option>
              {machines.map((machine) => (
                <option key={machine.id} value={machine.id}>
                  {machine.name}
                </option>
              ))}
            </select>
            {formik.touched.machineId && formik.errors.machineId && (
              <div className="error-message">{formik.errors.machineId}</div>
            )}
          </div>

          {isLoadingProcessTypes ? (
            <p>Loading process types...</p>
          ) : isErrorProcessTypes ? (
            <p>Error loading process types</p>
          ) : (
            <div>
              <label htmlFor="processTypeId">Process Type:</label>
              <select
                id="processTypeId"
                name="processTypeId"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.processTypeId}
              >
                <option value="" disabled>
                  Select a Process Type
                </option>
                {processTypes.map((processType) => (
                  <option key={processType.id} value={processType.id}>
                    {processType.type}
                  </option>
                ))}
              </select>
              {formik.touched.processTypeId && formik.errors.processTypeId && (
                <div className="error-message">
                  {formik.errors.processTypeId}
                </div>
              )}
            </div>
          )}
          <label htmlFor="pDate">Processing Date:</label>
          <DatePicker
            selected={formik.values.pDate}
            onChange={(pDate: Date | null) =>
              formik.setFieldValue("pDate", pDate)
            }
          />
          {formik.touched.pDate && formik.errors.pDate && (
            <div className="error-message">{formik.errors.pDate}</div>
          )}
          <SubmitFormButton
            type="submit"
            color="#97a97c"
            label="Create Growing Period"
            disabled={formik.isSubmitting}
          />
        </form>
      </FieldCultivationFormContainer>
    </StyledCreateGrowingPeriodFormContainer>
  );
};

export default CreateGrowingPeriodForm;
