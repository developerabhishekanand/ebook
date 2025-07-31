import styled from "styled-components";

const SliderStyle = styled.div`
  .slider-container  {
    margin: 40px 0;

    .slick-prev,.slick-next {
      &:before {
        display: none;
      }
    }

    .slick-track {
      display: flex;
    }
  }
`;

export default SliderStyle;