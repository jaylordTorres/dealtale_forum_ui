import { ForumListItem } from "../../component";
import { useForumList } from "./hook";

export function ForumListPage() {
  const { data } = useForumList();

  return (
    <div>
      {data.map((i) => (
        <ForumListItem key={i._id} forum={i} />
      ))}
    </div>
  );
}
