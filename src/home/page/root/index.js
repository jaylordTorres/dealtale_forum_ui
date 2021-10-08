import { Button } from "../../../app/component";
import { useHome } from "./hook";
import { StyledHome } from "./styled";

export function HomeRootPage() {
  const { onVisitForum } = useHome();

  return (
    <StyledHome>
      <section>
        <h1>Dealtale Skill Testing</h1>
        <Button onClick={onVisitForum}>visit Forum</Button>
      </section>
    </StyledHome>
  );
}
