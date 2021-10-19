import { ForumRouter } from "../forum/router";
import { HomeRouter } from "../home/router";
import { NotFoundRouter } from "../not_found/router";

export const appRoutes = [
  ForumRouter,
  HomeRouter,

  // must last item, due to its empty path
  NotFoundRouter,
];
