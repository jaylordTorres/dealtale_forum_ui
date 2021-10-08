import { ForumListItem } from "../../component";
import { useForumList } from "./hook";

export function ForumListPage() {
  const { data } = useForumList();

  return (
    <div>
      <h1>Forum list Page</h1>

      {data.map((i) => (
        <ForumListItem key={i._id} forum={i} />
      ))}
    </div>
  );
}
