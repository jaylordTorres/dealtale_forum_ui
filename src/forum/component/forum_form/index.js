import { Button } from "../../../app/component";
import { useForumForm } from "./hook";
import { StyledForumForm } from "./styled";

export function ForumForm({ initialValues, onSubmit, onCancel }) {
  const { formik } = useForumForm({ initialValues, onSubmit });

  return (
    <StyledForumForm>
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
          <Button type="button" onClick={onCancel}>
            cancel
          </Button>
          <Button type="submit">save</Button>
        </div>
      </form>
    </StyledForumForm>
  );
}
