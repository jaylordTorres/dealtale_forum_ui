import { AccessDenied } from "../../component";

export const withProtection =
  (Component, FallBack = AccessDenied) =>
  (props) => {
    console.log("protected");
    return <FallBack />;
    return <Component {...props} />;
  };
