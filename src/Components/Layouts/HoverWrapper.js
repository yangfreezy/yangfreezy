import React from "react";
import styled from "styled-components";

const StyledHover = styled.div`
  &:hover {
    box-shadow: 5px 5px 10px #888888;
    transition: box-shadow 0.4s ease-in-out;
    cursor: pointer;
  }
`;

export const HoverWrapper = ({ children }) => {
  return <StyledHover>{children}</StyledHover>;
};
