import { ForumForm } from "../../component/forum_form";

import { useForumCreate } from "./hook";

export function ForumCreatePage() {
  const { onCancel, mutation } = useForumCreate();

  return (
    <div>
      <ForumForm
        onCancel={onCancel}
        onSubmit={mutation.mutate}
      />
    </div>
  );
}
