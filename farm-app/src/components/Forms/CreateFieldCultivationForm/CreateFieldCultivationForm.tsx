import { useFormik } from "formik";
import {
  FieldCultivationFormContainer,
  StyledCreateFieldCultivationFormContainer,
} from "./CreateFieldCultivationForm.style";
import FieldCultivationService from "../../../services/FieldCultivationService";
import { useProcessTypes } from "../../../hooks/useProcessTypes";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useMachinesByFieldId from "../../../hooks/useMachinesByFieldId";
import { useNavigate } from "react-router";
import SubmitFormButton from "../../../ui-elements/submitFormButton";
import { fieldCultivationValidationSchema } from "../../statics/form-validations";

const CreateFieldCultivationForm = ({ onSubmit }) => {
  const fieldId = window.location.pathname.split("/")[2];
  const growingPeriodId = window.location.pathname.split("/")[4];
  const { machines = [] } = useMachinesByFieldId(fieldId);
  const { processTypes = [] } = useProcessTypes();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      pDate: new Date(),
      machineId: "",
      growingPeriodId: growingPeriodId,
      processTypeId: "",
    },
    validationSchema: fieldCultivationValidationSchema,
    onSubmit: async (values, { setSubmitting, setFieldError, resetForm }) => {
      try {
        const response = await FieldCultivationService.createFieldCultivation({
          ...values,
          pDate: values.pDate.toISOString(),
        });
        alert("Field cultivation created successfully");
        onSubmit?.(response);
        resetForm();
        navigate(`/field/${fieldId}/growing-period/${growingPeriodId}`);
      } catch (error) {
        console.error("Error in field cultivation form submit", error);
        setFieldError(
          "error",
          error.message || "An unexpected error occurred."
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <StyledCreateFieldCultivationFormContainer>
      <FieldCultivationFormContainer>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="pDate">Planting Date:</label>
          <DatePicker
            selected={formik.values.pDate}
            onChange={(date: Date | null) =>
              formik.setFieldValue("pDate", date)
            }
          />
          {formik.touched.pDate && formik.errors.pDate && (
            <div className="error-message">{formik.errors.pDate}</div>
          )}
          <label htmlFor="machineId">Machine:</label>
          <select
            id="machineId"
            name="machineId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.machineId}
          >
            <option value="" disabled>
              Select a Machine
            </option>
            {machines.map((machine) => (
              <option key={machine.id} value={machine.id}>
                {machine.name}
              </option>
            ))}
          </select>
          {formik.touched.machineId && formik.errors.machineId ? (
            <div className="error-message">{formik.errors.machineId}</div>
          ) : null}
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
            {processTypes.map((process) => (
              <option key={process.id} value={process.id}>
                {process.type}
              </option>
            ))}
          </select>
          {formik.touched.processTypeId && formik.errors.processTypeId ? (
            <div className="error-message">{formik.errors.processTypeId}</div>
          ) : null}
          <SubmitFormButton
            type="submit"
            label="Create Field Cultivation"
            color="#f4a259"
            disabled={formik.isSubmitting}
          />
        </form>
      </FieldCultivationFormContainer>
    </StyledCreateFieldCultivationFormContainer>
  );
};

export default CreateFieldCultivationForm;
