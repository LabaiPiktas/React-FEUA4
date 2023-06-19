import PropTypes from "prop-types";
import {
  StyledCardWrapper,
  StyledCardHeaderContainer,
  StyledCardHeader,
  StyledDivider,
  StyledCardContentContainer,
  StyledCardContentHeader,
  StyledCardContentParagraph,
} from "./style";

const Card = ({ color }) => {
  return (
    <StyledCardWrapper color={color}>
      <StyledCardHeaderContainer>
        <StyledCardHeader>Header</StyledCardHeader>
      </StyledCardHeaderContainer>
      <StyledDivider></StyledDivider>
      <StyledCardContentContainer>
        <StyledCardContentHeader>Secondary card title</StyledCardContentHeader>
        <StyledCardContentParagraph>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </StyledCardContentParagraph>
      </StyledCardContentContainer>
    </StyledCardWrapper>
  );
};

Card.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]).isRequired,
};

export default Card;
