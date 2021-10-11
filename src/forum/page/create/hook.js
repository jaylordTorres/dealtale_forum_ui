import { useCallback } from "react";
import { useHistory } from "react-router";

import { useForum } from "../../provider";

export function useForumCreate() {
  const history = useHistory();
  const { create } = useForum();

  const onCreate = useCallback(
    async (values) => {
      await create({ values });
      history.goBack();
    },
    [create, history]
  );

  const onCancel = useCallback(() => history.goBack(), [history]);

  return { onCreate, onCancel };
}
