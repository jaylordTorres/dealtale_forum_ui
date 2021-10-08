import { useFormik } from "formik";

export function useForumForm({ initialValues, onSubmit }) {
  const formik = useFormik({
    initialValues: initialValues || { title: "", content: "" },

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
