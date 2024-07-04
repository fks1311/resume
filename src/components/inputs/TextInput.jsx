import { forwardRef } from "react";
import { styled } from "styled-components";

const TextInput = forwardRef((props, ref) => {
  return (
    <Container>
      <Input />
    </Container>
  );
});

const Container = styled.div``;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid #333;
`;

export default TextInput;
