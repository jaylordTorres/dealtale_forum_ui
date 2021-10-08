import { useEffect } from "react";
import { useQuery } from "react-query";

import { fetcher } from "../../../app/util/request";

export function useForumList() {
  const { data, refetch } = useQuery(`forum`, fetcher);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data: data ? data.data : [] };
}
