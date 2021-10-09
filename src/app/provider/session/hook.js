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
    (async () => {
      const localSession = await SessionStore.item();

      if (localSession) {
        setValue((s) => ({ ...s, ...localSession }));
      } else {
        // dont have sesesion then saved on browser
        const value = { id: generateID() };

        await SessionStore.save(value);
        setValue((i) => ({ ...i, ...value }));
      }
    })();
  }, [setValue, SessionStore]);

  return { ...value, isOwner };
}
