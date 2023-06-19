import { styled } from "styled-components";

// Define your colors
const primaryColor = "#0000FF";
const secondaryColor = "#00FF00";
const textColor = "#FFFFFF";

export const StyledCardWrapper = styled.div`
  background-color: ${primaryColor};
  max-width: 18rem;
  border: 5px red solid;
  border-radius: 5px;
`;

export const StyledCardHeaderContainer = styled.div`
  background-color: ${primaryColor};
`;

export const StyledCardHeader = styled.h5`
  color: ${textColor};
`;

export const StyledDivider = styled.div`
  background-color: ${textColor};
`;

export const StyledCardContentContainer = styled.div`
  background-color: ${primaryColor};
`;

export const StyledCardContentHeader = styled.h4`
  color: ${textColor};
`;

export const StyledCardContentParagraph = styled.p`
  color: ${textColor};
`;
