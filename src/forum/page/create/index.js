import { ForumForm } from "../../component/forum_form";

import { useForumCreate } from "./hook";

export function ForumCreatePage() {
  const { onCancel, onCreate } = useForumCreate();

  return (
    <div>
      <ForumForm onCancel={onCancel} onSubmit={onCreate} />
    </div>
  );
}
