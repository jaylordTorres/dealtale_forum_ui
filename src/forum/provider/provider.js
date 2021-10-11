import { ForumContext } from "./constant";
import { useForumProvider } from "./hook";

export function ForumProvider({ children }) {
  const value = useForumProvider();

  return (
    <ForumContext.Provider value={value}>{children}</ForumContext.Provider>
  );
}
