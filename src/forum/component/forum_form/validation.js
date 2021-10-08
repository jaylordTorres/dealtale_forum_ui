import * as Yup from "yup";

export const ForumFormValidation = Yup.object().shape({
  title: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  content: Yup.string()
    .min(3, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
});
