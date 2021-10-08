import { useCallback } from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router";

import { poster } from "../../../app/util/request";

export function useForumCreate() {
  const history = useHistory();
  const mutation = useMutation((values) => poster(`forum/`, values), {
    onSuccess: () => history.goBack(),
  });

  const onCancel = useCallback(() => history.goBack(), [history]);

  return { mutation, onCancel };
}
