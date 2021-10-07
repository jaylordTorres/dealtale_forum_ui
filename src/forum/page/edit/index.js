import { withProtection } from "../../../app/hoc";
import { useForumEdit } from "./hook";

function Page() {
  const { id } = useForumEdit();
  return <h1>Forum Edit Page, {id}</h1>;
}

export const ForumEditPage = withProtection(Page);
