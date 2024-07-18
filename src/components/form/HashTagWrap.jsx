import { useState, useCallback, forwardRef } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { userInfoStateAtom } from "utils/atom";

const HashTagWrap = forwardRef((props, ref) => {
  const { register, id, placeholder, ...rest } = props;
  const [userInfo, setUserInfo] = useRecoilState(userInfoStateAtom);
  const [hashtagArray, setHashtagArray] = useState([]);
  const [value, setValue] = useState("");

  const handlerTag = (e) => {
    setValue(e.target.value);
  };

  const handleEnterKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        // 한글 입력 시, 마지막 글자 입력 + 공백 에러 처리
        const trimmedValue = value.trim();
        if (trimmedValue !== "") {
          // setHashtagArray((prev) => [...prev, trimmedValue]);
          setUserInfo((prev) => ({
            ...prev,
            [`${id}`]: [...(prev[id] || []), trimmedValue],
          }));
          setValue("");
        }
      }
    },
    [value]
  );

  return (
    <Container>
      <HashWrap>
        {userInfo[id].map((tag, idx) => (
          <HashTag key={idx}>{tag}</HashTag>
        ))}
      </HashWrap>
      <HashInput
        value={value || ""}
        placeholder={placeholder}
        onKeyDown={handleEnterKeyPress}
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
  white-space: pre-wrap;
  outline: none;
  border: none;
  border-bottom: 1px solid #eeedeb;
`;

export default HashTagWrap;
