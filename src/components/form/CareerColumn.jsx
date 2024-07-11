import { useEffect, useState, useRef, forwardRef } from "react";
import { styled } from "styled-components";

const CareerColumn = forwardRef((props, ref) => {
  const { length } = props;

  const rowRef = useRef();
  const [value, setValue] = useState();
  const [vl, setVl] = useState();

  const handlerInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    rowRef.current.style.height = "auto";
    rowRef.current.style.height = rowRef.current.scrollHeight + "px";
    setVl(rowRef.current.getBoundingClientRect().height + 105);
  }, [value]);

  return (
    <Container>
      <Date className="date">
        <DotContainer>
          <Dot />
          {length >= 2 && <VLine vl={vl} />}
        </DotContainer>
        <span>2024-07</span>
        <span>오늘날짜</span>
      </Date>
      <Content className="content">
        <Company>
          <input placeholder="회사명" />
          <input placeholder="근무기간" />
          <input placeholder="사용스킬" />
        </Company>
        <Rows ref={rowRef} value={value || ""} onChange={handlerInput} />
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
  height: ${({ vl }) => vl}px;
  border-left: 3px solid #478ccf;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const Company = styled.div`
  height: 105px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
    width: 400px;
    padding: 0px 0px 8px 0px;
    outline: none;
    border: none;
    border-bottom: 1px solid #eeedeb;
  }
`;

const Rows = styled.textarea`
  resize: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #eeedeb;
`;

export default CareerColumn;
