import { useFormik } from "formik";
import { useFarms } from "../../../hooks/useFarms";
import MachineService from "../../../services/MachineService";
import {
  MachineFormContainer,
  StyledCreateMachineFormContainer,
} from "./MachineForm.style";
import SubmitFormButton from "../../../ui-elements/submitFormButton";
import { machineValidationSchema } from "../../statics/form-validations";

const MachineForm = ({ onSubmit }) => {
  const { farms = [] } = useFarms();

  const formik = useFormik({
    initialValues: {
      name: "",
      brand: "",
      registerNumber: "",
      farmId: "",
      error: "",
    },
    validationSchema: machineValidationSchema,
    onSubmit: async (values, { setSubmitting, setFieldError, resetForm }) => {
      try {
        const createdMachine = await MachineService.createMachine(values);
        console.log(createdMachine.message);

        if (createdMachine.message) {
          throw new Error(createdMachine.message);
        }
        alert("You created a new machine");
        onSubmit(createdMachine);
        resetForm();
      } catch (error) {
        console.error("Error in machine form submit", error);
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.";
        setFieldError("error", errorMessage);
        setSubmitting(false);
      }
      setSubmitting(false);
    },
  });

  return (
    <StyledCreateMachineFormContainer>
      <MachineFormContainer>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Machine name:</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error-message">{formik.errors.name}</div>
          ) : null}

          <label htmlFor="brand">Brand:</label>
          <input
            id="brand"
            name="brand"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.brand}
          />
          {formik.touched.brand && formik.errors.brand ? (
            <div className="error-message">{formik.errors.brand}</div>
          ) : null}

          <label htmlFor="registerNumber">Register number:</label>
          <input
            id="registerNumber"
            name="registerNumber"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.registerNumber}
          />
          {formik.touched.registerNumber && formik.errors.registerNumber ? (
            <div className="error-message">{formik.errors.registerNumber}</div>
          ) : null}

          <label htmlFor="farmId">Farm:</label>
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
          {formik.touched.farmId && formik.errors.farmId ? (
            <div className="error-message">{formik.errors.farmId}</div>
          ) : null}
          {formik.errors.error && (
            <div className="error-message">{formik.errors.error}</div>
          )}
          <SubmitFormButton
            label="Create Machine"
            color="#97a97c"
            type="submit"
            disabled={formik.isSubmitting}
          />
        </form>
      </MachineFormContainer>
    </StyledCreateMachineFormContainer>
  );
};

export default MachineForm;
