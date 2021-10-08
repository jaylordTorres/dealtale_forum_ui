import { useForumForm } from "./hook";

export function ForumForm({ initialValues, onSubmit }) {
  const { formik } = useForumForm({ initialValues, onSubmit });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input type="text" name="title" onChange={formik.handleChange} />
      </div>
      <div>
        <textarea
          type="text"
          multiple
          rows={4}
          name="content"
          onChange={formik.handleChange}
        />
      </div>

      <div>
        <button>cancel</button>
        <button type="submit">save</button>
      </div>
    </form>
  );
}
