import { useCallback } from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router";

import { useService } from "../../../app/provider/service/hook";

export function useForumCreate() {
  const history = useHistory();
  const { api } = useService();
  const mutation = useMutation((values) => api.poster(`forum/`, values), {
    onSuccess: () => history.goBack(),
  });

  const onCancel = useCallback(() => history.goBack(), [history]);

  return { mutation, onCancel };
}
