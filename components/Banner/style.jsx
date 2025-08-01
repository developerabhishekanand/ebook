import styled from "styled-components";

const BannerStyle = styled.div`
  padding: 40px 0;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;

  .danger-500 {
    color: red;
    font-weight: 500;
  }

  p {
    margin-top: 10px;
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
// Create a Title component that'll render an <h1> tag with some styles

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  margin: 20px 0;
`;



export default BannerStyle;