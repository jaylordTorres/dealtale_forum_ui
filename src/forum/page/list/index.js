import { ForumListItem } from "../../component";
import { useForumList } from "./hook";

export function ForumListPage() {
  const { data } = useForumList();

  return (
    <div>
      <h2>Forum list Page</h2>

      {data.map((i) => (
        <ForumListItem key={i._id} forum={i} />
      ))}
    </div>
  );
}
