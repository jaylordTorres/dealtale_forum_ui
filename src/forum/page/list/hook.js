import { useCallback, useEffect } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router";

import { fetcher } from "../../../app/util/request";
import { paths } from "../../path";

export function useForumList() {
  const history = useHistory();
  const { data, refetch } = useQuery(`forum`, fetcher);
  const onCreate = useCallback(() => history.push(paths.create), [history]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data: data ? data.data : [], onCreate };
}
