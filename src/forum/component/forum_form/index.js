import { useForumForm } from "./hook";

export function ForumForm({ initialValues, onSubmit, onCancel }) {
  const { formik } = useForumForm({ initialValues, onSubmit });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          type="text"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
      </div>
      <div>
        <textarea
          type="text"
          multiple
          rows={4}
          name="content"
          onChange={formik.handleChange}
          value={formik.values.content}
        />
      </div>

      <div>{formik.errors.form}</div>
      <div>
        <button type="button" onClick={onCancel}>
          cancel
        </button>
        <button type="submit">save</button>
      </div>
    </form>
  );
}
