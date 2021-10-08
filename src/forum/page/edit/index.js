import { memo } from "react";

import { AccessDenied } from "../../../app/component";
import { withProtection } from "../../../app/hoc";
import { useSession } from "../../../app/provider/session/hook";
import { ForumForm } from "../../component/forum_form";

import { useForumEdit } from "./hook";

function Page() {
  const { data } = useForumEdit();
  const { isOwner } = useSession();

  if (!data) {
    return null;
  }

  if (data && !isOwner(data.sessionId)) {
    return <AccessDenied />;
  }

  return (
    <div>
      <h5>Forum Edit Page, {data && data.id}</h5>
      <hr />
      <ForumForm />
    </div>
  );
}

export const ForumEditPage = memo(withProtection(Page));
