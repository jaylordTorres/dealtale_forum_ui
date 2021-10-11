import { memo } from "react";

import { AccessDenied } from "../../../app/component";
import { withProtection } from "../../../app/hoc";
import { useSession } from "../../../app/provider/session/hook";
import { ForumForm } from "../../component/forum_form";

import { useForumEdit } from "./hook";

function Page() {
  const { isOwner } = useSession();
  const { value, onCancel, onUpdate } = useForumEdit();

  if (!value) {
    return null;
  }

  if (value && !isOwner(value.sessionId)) {
    return <AccessDenied />;
  }

  return (
    <div>
      <ForumForm
        initialValues={value}
        onCancel={onCancel}
        onSubmit={onUpdate}
      />
    </div>
  );
}

export const ForumEditPage = memo(withProtection(Page));
