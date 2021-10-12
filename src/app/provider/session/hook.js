import { useCallback, useContext, useEffect, useState } from "react";

import { generateID } from "../../util/string";
import { useService } from "../service/hook";
import { SessionContext } from "./constant";

export function useSession() {
  const session = useContext(SessionContext);

  if (!session) {
    throw new Error("useSession must be wrapped inside SessionProvider.");
  }

  return {
    id: session.id,
    isOwner: session.isOwner,
  };
}

// private
export function useSessionProvider() {
  const [value, setValue] = useState({ id: null });
  const {
    stores: { session: SessionStore },
  } = useService();

  const isOwner = useCallback(
    (id) => {
      return String(id) === String(value.id);
    },
    [value]
  );

  // initialized user session
  useEffect(() => {
    SessionStore.load((v) => setValue((s) => ({ ...s, ...v })), {
      id: generateID(),
    });
  }, [setValue, SessionStore]);

  return { ...value, isOwner };
}
