import PropTypes from "prop-types";
import { Button } from "../../../app/component";
import { ForumProptype } from "../../../app/prop_type";
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
          <span className="error">
            {formik.touched.content && formik.errors.title}
          </span>
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
          <span className="error">
            {formik.touched.content && formik.errors.content}
          </span>
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

ForumForm.propTypes = {
  initialValues: ForumProptype,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
