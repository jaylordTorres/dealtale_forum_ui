import { useContext, useMemo } from "react";
import { useMutation, useQuery } from "react-query";

import { useService } from "../../app/provider/service/hook";
import { ForumContext } from "./constant";

export function useForum() {
  const forum = useContext(ForumContext);

  if (!forum) {
    throw new Error("Forum must be wrapped inside ForumProvider.");
  }

  return forum;
}

// private
export function useForumProvider() {
  const { api } = useService();
  const { data, refetch } = useQuery(`forum`, api.fetcher);

  const create = useMutation(({ values }) => api.poster(`forum/`, values), {
    onSuccess: refetch,
  });

  const update = useMutation(
    ({ values, id }) => api.patcher(`forum/${id}`, values),
    {
      onSuccess: refetch,
    }
  );

  return useMemo(
    () => ({
      values: data ? data.data : [],
      update: update.mutate,
      create: create.mutate,
    }),
    [data, update.mutate, create.mutate]
  );
}
