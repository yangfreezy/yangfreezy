import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import imageGuard from "./../Assets/image-unavailable.png";

const StyledThumbnail = styled.img`
  width: ${props => (props.width ? props.width : "200px")};
  height: auto;
`;

export const ProductListThumbnail = ({ src, alt, id, width }) => {
  return (
    <Link to={`/product/${id}`}>
      <StyledThumbnail width={width} src={src || imageGuard} alt={alt} />
    </Link>
  );
};
