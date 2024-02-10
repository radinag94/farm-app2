import * as Yup from "yup";
export const farmFormSchema = Yup.object().shape({
    name: Yup.string().required("Farm name is required"),
    latitude: Yup.number()
      .required("Latitude is required")
      .min(-90, "Minimum value is -90")
      .max(90, "Maximum value is 90"),
    longitude: Yup.number()
      .required("Longitude is required")
      .min(-180, "Minimum value is -180")
      .max(180, "Maximum value is 180"),
  });


  export const machineValidationSchema = Yup.object({
    name: Yup.string().required("Required"),
    brand: Yup.string().required("Required"),
    registerNumber: Yup.string().required("Required"),
    farmId: Yup.string().required("Required"),
  });

  export const FieldFormSchema = Yup.object().shape({
    name: Yup.string().required("Field name is required"),
    fieldArea: Yup.number()
      .positive("Field area must be positive")
      .required("Field area is required"),
    soilId: Yup.string().required("Soil type is required"),
    farmId: Yup.string().required("Farm is required"),
    coordinates: Yup.string().required("Shape coordinates are required"),
  });

  export const updateFarmFormSchema = Yup.object({
    name: Yup.string()
      .min(2, "The farm name you provided is too short")
      .max(20, "The farm name you provided is too long"),
    latitude: Yup.string()
      .matches(/^-?\d+(\.\d+)?$/, "Invalid latitude value")
      .test("is-valid-latitude", "Invalid latitude value", value =>
        !value || (value && !isNaN(parseFloat(value)) && parseFloat(value) >= -90 && parseFloat(value) <= 90) ? true : false
      ),
    longitude: Yup.string()
      .matches(/^-?\d+(\.\d+)?$/, "Invalid longitude value")
      .test("is-valid-longitude", "Invalid longitude value", value =>
        !value || (value && !isNaN(parseFloat(value)) && parseFloat(value) >= -180 && parseFloat(value) <= 180) ? true : false
      ),
  });

  export const updateFieldFormSchema = Yup.object().shape({
    name: Yup.string().required("Field name is required"),
    fieldArea: Yup.number()
      .positive("Field area must be positive")
      .required("Field area is required"),
    soilId: Yup.string().required("Soil type is required"),
    farmId: Yup.string().required("Farm is required"),
    coordinates: Yup.string().required("Shape coordinates are required"),
  });

  export const fieldCultivationValidationSchema = Yup.object({
    pDate: Yup.date().required('Planting date is required'),
    machineId: Yup.string().required('Machine is required'),
    growingPeriodId: Yup.string().required('Growing period is required'),
    processTypeId: Yup.string().required('Process type is required'),
  });

  export const growingPeriodValidationSchema = Yup.object({
    cropId: Yup.string().required("Machine is required"),
  });

  export const loginValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email cannot be empty"),
    password: Yup.string()
      .min(5, "Password must be at least 5 characters long")
      .max(20, "Password cannot be more than 20 characters long")
      .required("Password cannot be empty"),
  });