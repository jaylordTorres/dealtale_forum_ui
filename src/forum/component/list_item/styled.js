import styled from "@emotion/styled";

export const StyledListItem = styled("div")`
  border: gray solid 0.5px;
  margin: 8px;
  cursor: pointer;

  & > h4 {
    text-transform: capitalize;
    background-color: #621940;
    color: white;
    padding: 8px 16px;
    margin: 0px;
  }

  & > section {
    text-transform: capitalize;
    padding: 16px;
  }

`;
