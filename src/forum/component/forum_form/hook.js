import { useFormik } from "formik";
import { ForumFormValidation } from "./validation";

export function useForumForm({ initialValues, onSubmit }) {
  const formik = useFormik({
    initialValues: initialValues || { title: "", content: "" },
    validationSchema: ForumFormValidation,

    onSubmit: async (values, { setErrors, resetForm }) => {
      try {
        await onSubmit({
          title: values.title,
          content: values.content,
        });

        resetForm();
      } catch (e) {
        setErrors({ form: "summition failed" });
      }
    },
  });

  return { formik };
}
