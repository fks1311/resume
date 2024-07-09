import { forwardRef } from "react";
import styled from "styled-components";

const SimpleIntroduce = forwardRef((props, ref) => {
  return (
    <Container>
      <h1>간단 소개</h1>
      <ContentContainer>
        <TextArea />
      </ContentContainer>
    </Container>
  );
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
const ContentContainer = styled.div`
  margin: 20px;
`;
const TextArea = styled.textarea`
  width: 550px;
  padding: 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid #eeedeb;
`;

export default SimpleIntroduce;
