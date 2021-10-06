import { Route, Switch } from "react-router";

import { path } from "../../path";

import { ForumCreatePage } from "../create";
import { ForumDetailPage } from "../detail";
import { ForumEditPage } from "../edit";
import { ForumListPage } from "../list";
import { ForumRootPage } from "../root";

export function ForumPage() {
  return (
    <Switch>
      <Route path={path.create} component={ForumCreatePage} />
      <Route path={path.detail} component={ForumDetailPage} />
      <Route path={path.edit} component={ForumEditPage} />
      <Route path={path.list} component={ForumListPage} />
      <Route path={path.root} component={ForumRootPage} />
    </Switch>
  );
}
