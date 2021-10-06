import { Route, Switch } from "react-router";

import { paths } from "../../path";

import { ForumCreatePage } from "../create";
import { ForumDetailPage } from "../detail";
import { ForumEditPage } from "../edit";
import { ForumListPage } from "../list";
import { ForumRootPage } from "../root";

export function ForumPage() {
  return (
    <Switch>
      <Route path={paths.create} component={ForumCreatePage} />
      <Route path={paths.detail} component={ForumDetailPage} />
      <Route path={paths.edit} component={ForumEditPage} />
      <Route path={paths.list} component={ForumListPage} />
      <Route path={paths.root} component={ForumRootPage} />
    </Switch>
  );
}
