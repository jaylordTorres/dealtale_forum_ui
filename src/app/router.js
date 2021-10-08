import { Route, Switch } from "react-router";
import { ForumRouter } from "../forum/router";
import { HomeRouter } from "../home/router";
import { NotFoundRouter } from "../not_found/router";

const routes = [
  ForumRouter,
  HomeRouter,

  // must last item
  NotFoundRouter,
];

export function AppRouter() {
  return (
    <Switch>
      {routes.map((i) => (
        <Route {...i} />
      ))}
    </Switch>
  );
}
