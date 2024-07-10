import { forwardRef } from "react";
import { styled } from "styled-components";

const Career = forwardRef((props, ref) => {
  return <Container>Career</Container>;
});

const Container = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  // justify-content: center;
  h1 {
    width: 150px;
    margin: 20px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
`;

export default Career;
