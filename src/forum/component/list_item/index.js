import { useForumListItem } from "./hook";
import { StyledListItem } from "./styled";

export function ForumListItem({ forum: { _id: id, title, content } }) {
  const { onClick } = useForumListItem({ id });

  return (
    <StyledListItem onClick={onClick}>
      <h4>{title}</h4>
      <section>{content}</section>
    </StyledListItem>
  );
}
