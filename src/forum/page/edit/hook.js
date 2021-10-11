import { useCallback } from "react";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router";

import { useService } from "../../../app/provider/service/hook";
import { useForum } from "../../provider";

export function useForumEdit() {
  const history = useHistory();
  const { update } = useForum();
  const { id } = useParams();
  const { api } = useService();
  const { data } = useQuery(`forum/${id}`, api.fetcher);

  const onUpdate = useCallback(
    async (values) => {
      await update({ values, id });
      history.goBack();
    },
    [update, id, history]
  );

  const onCancel = useCallback(() => history.goBack(), [history]);

  return { id, value: data ? data.data : null, onUpdate, onCancel };
}
