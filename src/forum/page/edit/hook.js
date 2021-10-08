import { useCallback } from "react";
import { useQuery, useMutation } from "react-query";
import { useHistory, useParams } from "react-router";

import { fetcher, patcher } from "../../../app/util/request";

export function useForumEdit() {
  const history = useHistory();
  const { id } = useParams();
  const { data } = useQuery(`forum/${id}`, fetcher);
  const mutation = useMutation((values) => patcher(`forum/${id}`, values), {
    onSuccess: () => history.goBack(),
  });

  const onCancel = useCallback(() => history.goBack(), [history]);

  return { id, data: data ? data.data : null, mutation, onCancel };
}
