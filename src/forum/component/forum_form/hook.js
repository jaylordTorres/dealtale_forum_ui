import { useFormik } from "formik";

export function useForumForm({ initialValues, onSubmit }) {
  const formik = useFormik({
    initialValues: initialValues || { title: "", content: "" },

    onSubmit: async (values, { setErrors }) => {
      try {
        await onSubmit(values);
      } catch (e) {
        setErrors({ form: "summition failed" });
      }
    },
  });
  return { formik };
}
