import { forwardRef, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const TextInput = forwardRef((props, ref) => {
  const curInput = useRef();
  const { ftSize, placeholder } = props;

  useEffect(() => {}, []);

  return (
    <Container>
      <Input
        ref={curInput}
        $ftSize={ftSize}
        placeholder={placeholder ?? undefined}
      />
    </Container>
  );
});

const Container = styled.div`
  padding-bottom: 0.2rem;
`;
const Input = styled.input`
  // font-size: ${({ $ftSize }) => `${$ftSize}px` ?? undefined};
  font-size: 16px;
  outline: none;
  border: none;
  border-bottom: 1px solid #333;
`;

export default TextInput;

/**
 * input 태그
 *
 * width
 * 글자 길이에 따라 동적 조절 => useRef 활용
 *
 * font-size
 * essential-info > 입력 시, 폰트 사이즈 모두 동일
 * essential-info > 기 정보 렌더 시, 이름 폰트 사이즈 20, 그 외 undefined
 * essential-info > 기 정보 렌더 시, border-bottom 비활성화
 */
