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


