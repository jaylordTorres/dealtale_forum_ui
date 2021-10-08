import { useForumListItem } from "./hook";

export function ForumListItem({ forum: { _id: id, title, content } }) {
  const { onClick } = useForumListItem({ id });

  return (
    <div onClick={onClick}>
      <h4>{title}</h4>
      <div>{content}</div>
    </div>
  );
}
