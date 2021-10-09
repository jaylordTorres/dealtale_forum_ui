import { useCallback, useEffect } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router";

import { useService } from "../../../app/provider/service/hook";
import { paths } from "../../path";

export function useForumList() {
  const history = useHistory();
  const { api } = useService();
  const { data, refetch } = useQuery(`forum`, api.fetcher);

  const onCreate = useCallback(() => history.push(paths.create), [history]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data: data ? data.data : [], onCreate };
}
