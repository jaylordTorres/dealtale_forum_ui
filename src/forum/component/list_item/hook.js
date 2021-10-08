import { useCallback } from "react";
import { useHistory } from "react-router";
import { useSession } from "../../../app/provider/session/hook";

import { paths } from "../../path";

export function useForumListItem({ id, sessionId }) {
  const history = useHistory();
  const { isOwner } = useSession();

  const onClick = useCallback(
    () => history.push(paths.edit.replace(":id", id)),
    [id, history]
  );

  return {
    onClick: isOwner(sessionId) ? onClick : null,
  };
}
