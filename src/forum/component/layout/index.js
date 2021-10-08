import { StyledForumLayout } from "./styled";

export function ForumLayout({ children }) {
  return (
    <StyledForumLayout>
      <section>
        <h1>A Bulletin Board</h1>
        {children}
      </section>
    </StyledForumLayout>
  );
}
