import { useState, useCallback, forwardRef } from "react";
import { styled } from "styled-components";

const HashTagWrap = forwardRef((props, ref) => {
  const [hashtagArray, setHashtagArray] = useState([]);
  const [value, setValue] = useState("");
  const { placeholder } = props;

  const handlerTag = (e) => {
    setValue(e.target.value);
  };

  const handleEnterKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        // 한글 입력 시, 마지막 글자 입력 + 공백 에러 처리
        const trimmedValue = value.trim();
        if (trimmedValue !== "") {
          setHashtagArray((prev) => [...prev, trimmedValue]);
          setValue("");
        }
      }
    },
    [value]
  );

  return (
    <Container>
      <HashWrap>
        {hashtagArray.map((tag, idx) => (
          <HashTag key={idx}>{tag}</HashTag>
        ))}
      </HashWrap>
      <HashInput
        value={value || ""}
        placeholder={placeholder}
        onKeyUp={handleEnterKeyPress}
        onChange={handlerTag}
      />
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const HashWrap = styled.div`
  width: 550px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const HashTag = styled.div`
  padding: 8px 12px;
  color: #fff;
  font-weight: 700;
  border-radius: 56px;
  background-color: #478ccf;
`;
const HashInput = styled.input`
  width: 550px;
  padding: 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid #eeedeb;
`;

export default HashTagWrap;
