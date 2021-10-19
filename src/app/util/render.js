import { Route, Switch } from "react-router";

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((i) => (
        <Route {...i} />
      ))}
    </Switch>
  );
}

export function createRouter(path, component, key) {
  return {
    key: key || path,
    path,
    component,
  };
}
