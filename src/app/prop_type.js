import PropTypes from "prop-types";

export const ForumProptype = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  sessionId: PropTypes.string.isRequired,
});
