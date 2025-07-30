import styled from "styled-components";
import Image from 'next/image';

export const ImageWrapper = styled.div`
  
  &.image-wrapper {
    height: 360px;
    width: 100%;

    img {
      height: inherit !important;
      width: inherit !important;
      overflow: hidden;
      border-radius: 8px;
      position: relative !important;
      padding: 10px;
      object-fit: contain !important;
    }
  }
  
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;