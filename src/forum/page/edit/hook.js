import { useQuery } from "react-query";
import { useParams } from "react-router";

import { fetcher } from "../../../app/util/request";

export function useForumEdit() {
  const { id } = useParams();
  const { data } = useQuery(`forum/${id}`, fetcher);

  return { id, data: data ? data.data : null };
}
