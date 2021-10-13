import { useForumList } from "./hook";
import { UiForumListing } from "./ui";

export function ForumListPage() {
  const { values, onCreate } = useForumList();

  const uiProps = {
    values,
    onCreate,
  };

  return <UiForumListing {...uiProps} />;
}
