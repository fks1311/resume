import { forwardRef } from "react";
import { styled } from "styled-components";

// ref : register 함수
// rest : register 값
const TextInput = forwardRef((props, ref) => {
  const { placeholder, ...rest } = props;

  return (
    <Container>
      <Input ref={ref} {...rest} placeholder={placeholder ?? undefined} />
    </Container>
  );
});

const Container = styled.div`
  padding-bottom: 0.2rem;
`;
const Input = styled.input`
  width: 380px;
  padding: 5px;
  font-size: 16px;
  outline: none;
  border: none;
  border-bottom: 1px solid #eeedeb;
`;

export default TextInput;
