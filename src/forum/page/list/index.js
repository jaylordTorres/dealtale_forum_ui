import { Button } from "../../../app/component";
import { ForumListItem } from "../../component";
import { useForumList } from "./hook";
import { StyledForumList } from "./styled";

export function ForumListPage() {
  const { values, onCreate } = useForumList();

  return (
    <StyledForumList>
      <div>
        <Button onClick={onCreate}>Add listing</Button>
      </div>
      {values.map((i) => (
        <ForumListItem key={i._id} forum={i} />
      ))}
    </StyledForumList>
  );
}
