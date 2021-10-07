import { useCallback } from "react";
import { useHistory } from "react-router";

import { paths } from "../../path";

export function useForumListItem({ id }) {
  const history = useHistory();

  const onClick = useCallback(
    () => history.push(paths.edit.replace(":id", id)),
    [id, history]
  );

  return {
    onClick,
  };
}
