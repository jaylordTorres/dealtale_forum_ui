import { AccessDenied } from "../../component";
import { useSession } from "../../provider/session/hook";

export const withProtection =
  (Component, FallBack = AccessDenied) =>
  (props) => {
    const { id } = useSession();
    if (id) {
      return <Component {...props} />;
    }
    return <FallBack />;
  };
