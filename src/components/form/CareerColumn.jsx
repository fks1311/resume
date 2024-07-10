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
        <h3>회사명</h3>
        <h4>2024.07.10 ~ 2024.07.10</h4>
        <h4>skill</h4>
        <div>
          경력기술서 우라라라라라나랄
          <br />
          경력기술서 ㄴㄹ머니아럼니ㅏㄻ니아러
          <br />
          경력기술서 ㅋㅍ,킆,대개개ㅏㄴㅇ라ㅓㄴㅁ라ㅓㅏㅓ
          <br />
          경력기술서 ㅁㄹㄻ닐앚대ㅑ겨밷겹ㅈ갸ㅐㅕ
        </div>
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
  height: 40px;
  border-left: 3px solid #478ccf;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  h3 {
    font-size: 20px;
    font-weight: 600;
  }
  h4 {
    font-size: 16px;
  }
`;
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
