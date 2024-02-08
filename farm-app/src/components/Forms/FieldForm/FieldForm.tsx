import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Button from "../../../ui-elements/button";
import { useFarms } from "../../../hooks/useFarms";
import { useSoils } from "../../../hooks/useSoils";
import FieldService from "../../../services/FieldService";
import { FieldFormContainer } from "./FieldForm.style";
import { FieldFormData } from "../../statics/interfaces";
import { FieldFormSchema } from "../../statics/form-validations";



const FieldForm = ({ onSubmit }) => {
  const { farms = [] } = useFarms();
  const { soils = [] } = useSoils();

  return (
    <FieldFormContainer>
      <Formik
        initialValues={{
          name: "",
          fieldArea: 0,
          soilId: "",
          farmId: "",
          coordinates: "",
          error: "",
        }}
        validationSchema={FieldFormSchema}
        onSubmit={async (
          values,
          { setSubmitting, setFieldError, resetForm }
        ) => {
          try {
            console.log(values);
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
            console.log(fieldData.shape);
            const createdField = await FieldService.createField(fieldData);
            if (createdField.message) {
              throw new Error(createdField.message);
            }
            console.log(createdField);
            onSubmit(createdField);
            resetForm();
            alert("You created a new field");
          } catch (error) {
            console.error("Error in Field Form submit", error);
            const errorMessage =
              error instanceof Error
                ? error.message
                : "An unexpected error occurred.";
            setFieldError("error", errorMessage);
            setSubmitting(false);
          }
          setSubmitting(false);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <label htmlFor="name">Field Name:</label>
            <Field name="name" type="text" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}

            <label htmlFor="fieldArea">Field Area:</label>
            <Field name="fieldArea" type="number" />
            {errors.fieldArea && touched.fieldArea ? (
              <div>{errors.fieldArea}</div>
            ) : null}

            <label htmlFor="soilId">Soil Type:</label>
            <Field as="select" name="soilId">
              <option value="" disabled>
                Select a Soil
              </option>
              {soils.map((soil) => (
                <option key={soil.id} value={soil.id}>
                  {soil.type}
                </option>
              ))}
            </Field>
            {errors.soilId && touched.soilId ? (
              <div>{errors.soilId}</div>
            ) : null}

            <label htmlFor="farmId">Farm:</label>
            <Field as="select" name="farmId">
              <option value="" disabled>
                Select a Farm
              </option>
              {farms.map((farm) => (
                <option key={farm.id} value={farm.id}>
                  {farm.name}
                </option>
              ))}
            </Field>
            {errors.farmId && touched.farmId ? (
              <div>{errors.farmId}</div>
            ) : null}

            <label htmlFor="coordinates">Shape Coordinates:</label>
            <Field
              name="coordinates"
              type="text"
              placeholder="Enter coordinates separated by commas"
            />
            {errors.coordinates && touched.coordinates ? (
              <div>{errors.coordinates}</div>
            ) : null}
            {errors.error && (
              <div className="error-message">{errors.error}</div>
            )}
            <Button
              label="Create Field"
              color="#96db80"
              type="submit"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </FieldFormContainer>
  );
};

export default FieldForm;
