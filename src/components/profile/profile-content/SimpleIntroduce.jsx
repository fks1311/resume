import { useState, forwardRef } from "react";
import styled from "styled-components";

const SimpleIntroduce = forwardRef(({ register, errors, ...rest }, ref) => {
  const [value, setValue] = useState("");

  const handlerInput = (e) => {
    const vertical = document.getElementById("introduce");
    setValue(e.target.value);
    vertical.style.height = "auto";
    vertical.style.height = vertical.scrollHeight + "px";
  };

  return (
    <Container>
      <h1>간단 소개</h1>
      <ContentContainer>
        <TextArea
          id="introduce"
          {...register("introduce")}
          {...rest}
          value={value}
          rows={1}
          onChange={handlerInput}
        />
      </ContentContainer>
    </Container>
  );
});

export default SimpleIntroduce;

const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f6f5f5;
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
  resize: none; // 크기 조절 없애기
  outline: none; // 클릭 시, 테두리 없애기
  border: none; // 테두리 없애기
  border-bottom: 1px solid #eeedeb;
`;
