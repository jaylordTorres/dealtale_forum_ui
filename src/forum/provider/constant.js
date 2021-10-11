import { createContext } from "react";

// todo: refactor to recoil crud abstract implementation

export const ForumContext = createContext({
  values: [],
  create: null,
  update: null,
});
