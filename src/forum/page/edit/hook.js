import { useParams } from "react-router";

export function useForumEdit() {
  const { id } = useParams();
  return { id };
}
