import { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SimpleIntroduce = forwardRef((props, ref) => {
  const [value, setValue] = useState();
  const curRef = useRef();

  const handlerInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    curRef.current.style.height = "auto";
    curRef.current.style.height = curRef.current.scrollHeight + "px";
  }, [value]);

  return (
    <Container>
      <h1>간단 소개</h1>
      <ContentContainer>
        <TextArea ref={curRef} value={value} rows={1} onChange={handlerInput} />
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
  line-height: 1.5;
  resize: none; // 크기 조절 없애기
  outline: none; // 클릭 시, 테두리 없애기
  border: none; // 테두리 없애기
  border-bottom: 1px solid #eeedeb;
`;

export default SimpleIntroduce;
