import { useQuery } from "react-query";

import { fetcher } from "../../../app/util/request";

export function useForumList() {
  const { data } = useQuery(`forum`, fetcher);

  return { data: data ? data.data : [] };
}
