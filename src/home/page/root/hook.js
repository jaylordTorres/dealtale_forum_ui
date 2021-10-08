import { useCallback } from "react";
import { useHistory } from "react-router";

import { AppPaths } from "../../../app/constant";

export function useHome() {
  const history = useHistory();
  const onVisitForum = useCallback(
    () => history.push(AppPaths.forum.list),
    [history]
  );

  return { onVisitForum };
}
