import { forwardRef } from "react";
import { styled } from "styled-components";

const TextInput = forwardRef((props, ref) => {
  const { ftSize } = props;

  return (
    <Container>
      <Input $ftSize={ftSize} />
    </Container>
  );
});

const Container = styled.div``;
const Input = styled.input`
  // font-size: ${({ $ftSize }) => `${$ftSize}px` ?? undefined};
  outline: none;
  border: none;
  border-bottom: 1px solid #333;
`;

export default TextInput;

/**
 * font-size
 *
 * essential-info > 입력 시, 폰트 사이즈 모두 동일
 * essential-info > 기 정보 렌더 시, 이름 폰트 사이즈 20, 그 외 undefined
 * essential-info > 기 정보 렌더 시, border-bottom 비활성화
 */
