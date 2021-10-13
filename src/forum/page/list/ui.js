import PropTypes from "prop-types";
import { Button } from "../../../app/component";
import { ForumProptype } from "../../../app/prop_type";
import { ForumListItem } from "../../component";
import { StyledForumList } from "./styled";

export function UiForumListing({ values, onCreate }) {
  return (
    <StyledForumList>
      <div>
        <Button onClick={onCreate}>Add listing</Button>
      </div>
      {values.map((i) => (
        <ForumListItem key={i._id} forum={i} />
      ))}
    </StyledForumList>
  );
}

UiForumListing.propTypes = {
  values: PropTypes.arrayOf(ForumProptype).isRequired,
  onCreate: PropTypes.func.isRequired,
};
