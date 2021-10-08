import { ForumListItem } from "../../component";
import { useForumList } from "./hook";

export function ForumListPage() {
  const { data, onCreate } = useForumList();

  return (
    <div>
      <div>
        <button onClick={onCreate}>Add listing</button>
      </div>
      {data.map((i) => (
        <ForumListItem key={i._id} forum={i} />
      ))}
    </div>
  );
}
