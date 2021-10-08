import { ForumListItem } from "../../component";
import { useForumList } from "./hook";
import { StyledForumList } from "./styled";

export function ForumListPage() {
  const { data, onCreate } = useForumList();

  return (
    <StyledForumList>
      <div>
        <button className="create" onClick={onCreate}>
          Add listing
        </button>
      </div>
      {data.map((i) => (
        <ForumListItem key={i._id} forum={i} />
      ))}
    </StyledForumList>
  );
}
