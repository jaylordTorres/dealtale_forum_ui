import { memo } from "react";

import { AccessDenied } from "../../../app/component";
import { withProtection } from "../../../app/hoc";
import { useSession } from "../../../app/provider/session/hook";

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

  return <h1>Forum Edit Page, {data && data.id}</h1>;
}

export const ForumEditPage = memo(withProtection(Page));
