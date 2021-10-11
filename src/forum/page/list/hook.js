import { useCallback } from "react";
import { useHistory } from "react-router";

import { paths } from "../../path";
import { useForum } from "../../provider";

export function useForumList() {
  const history = useHistory();
  const { values } = useForum();

  const onCreate = useCallback(() => history.push(paths.create), [history]);

  return { values, onCreate };
}
