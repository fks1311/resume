import { useEffect, useState, useRef, forwardRef } from "react";
import { styled } from "styled-components";

const CareerColumn = forwardRef((props, ref) => {
  const { length } = props;

  const [vHeight, setVHeight] = useState();
  const [value, setValue] = useState();

  const handlerInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    // setVHeight(vhRef.current.scrollHeight);
  }, [value]);

  return (
    <Container>
      <Date>
        <DotContainer>
          <Dot />
          {length >= 2 && <VLine $vHeight={vHeight} length={length} />}
        </DotContainer>
        <span>2024-07</span>
        <span>오늘날짜</span>
      </Date>
      <Content>
        <Company>
          <input placeholder="회사명" />
          <input placeholder="근무기간" />
          <input placeholder="사용스킬" />
        </Company>
        <Rows value={value || ""} onChange={handlerInput} />
      </Content>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const Date = styled.div`
  display: flex;
  gap: 0.3rem;
`;
const DotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 3px solid #478ccf;
`;
const VLine = styled.div`
  // height: ${({ $vHeight }) => $vHeight}px;
  height: 120px;
  border-left: 3px solid #478ccf;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const Company = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 400px;
    // padding: 5px;
    outline: none;
    border: none;
    border-bottom: 1px solid #eeedeb;
  }
`;
const Rows = styled.textarea``;

const Content2 = styled.textarea`
  // width: 550px;
  // padding: 5px;
  // line-height: 1.5;
  resize: none; // 크기 조절 없애기
  outline: none; // 클릭 시, 테두리 없애기
  border: none; // 테두리 없애기
  border-bottom: 1px solid #478ccf;
`;

export default CareerColumn;
