import { memo } from "react";

import { AccessDenied } from "../../../app/component";
import { withProtection } from "../../../app/hoc";
import { useSession } from "../../../app/provider/session/hook";
import { ForumForm } from "../../component/forum_form";

import { useForumEdit } from "./hook";

function Page() {
  const { isOwner } = useSession();
  const { data, onCancel, mutation } = useForumEdit();

  if (!data) {
    return null;
  }

  if (data && !isOwner(data.sessionId)) {
    return <AccessDenied />;
  }

  return (
    <div>
      <ForumForm
        initialValues={data}
        onCancel={onCancel}
        onSubmit={mutation.mutate}
      />
    </div>
  );
}

export const ForumEditPage = memo(withProtection(Page));
