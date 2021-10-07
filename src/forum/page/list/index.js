import { ForumListItem } from "../../component";
import { forumTestData } from "../../data";

export function ForumListPage() {
  return (
    <div>
      <h1>Forum list Page</h1>

      {forumTestData.map((i) => (
        <ForumListItem key={i.id} forum={i} />
      ))}
    </div>
  );
}
