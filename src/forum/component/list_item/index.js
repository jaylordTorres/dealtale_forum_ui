import { ForumProptype } from "../../../app/prop_type";
import { useForumListItem } from "./hook";
import { StyledListItem } from "./styled";

export function ForumListItem({
  forum: { _id: id, title, content, sessionId },
}) {
  const { onClick } = useForumListItem({ id, sessionId });

  return (
    <StyledListItem onClick={onClick}>
      <h4>{title}</h4>
      <section>{content}</section>
    </StyledListItem>
  );
}

ForumListItem.propTypes = {
  forum: ForumProptype.isRequired,
};
