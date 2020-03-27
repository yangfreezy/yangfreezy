import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  align-items: ${props => props.alignItems || "center"};
  text-align: ${props => props.textAlign || "left"};
  margin: ${props => props.margin || "10px 0px 10px 0px"};
  padding: ${props => props.padding || "0px"};
  width: ${props => props.width || "auto"};
  font-size: ${props => props.fontSize || "14px"};
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: ${props => props.fontSize || "normal"};
  color: ${props => props.color || "black"};
  box-shadow: ${props => props.boxShadow || "none"};
  text-wrap: wrap;
  word-wrap: break-word;
`;

export const Text = ({
  children,
  text,
  alignItems,
  textAlign,
  margin,
  padding,
  width,
  fontSize,
  fontWeight,
  color,
  boxShadow
}) => {
  return (
    <StyledText
      alignItems={alignItems}
      textAlign={textAlign}
      margin={margin}
      padding={padding}
      width={width}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      boxShadow={boxShadow}
    >
      {text || children}
    </StyledText>
  );
};
