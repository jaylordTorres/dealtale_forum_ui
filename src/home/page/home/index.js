import { Route, Switch } from "react-router";

import { paths } from "../../path";

import { HomeRootPage } from "../root";

export function HomePage() {
  return (
    <Switch>
      <Route path={paths.root} component={HomeRootPage} />
    </Switch>
  );
}
