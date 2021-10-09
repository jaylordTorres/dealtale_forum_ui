import { useCallback } from "react";
import { useQuery, useMutation } from "react-query";
import { useHistory, useParams } from "react-router";

import { useService } from "../../../app/provider/service/hook";

export function useForumEdit() {
  const history = useHistory();
  const { id } = useParams();
  const { api } = useService();
  const { data } = useQuery(`forum/${id}`, api.fetcher);
  const mutation = useMutation((values) => api.patcher(`forum/${id}`, values), {
    onSuccess: () => history.goBack(),
  });

  const onCancel = useCallback(() => history.goBack(), [history]);

  return { id, data: data ? data.data : null, mutation, onCancel };
}
