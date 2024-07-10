import { useRef, forwardRef } from "react";
import { styled } from "styled-components";

const TextInput = forwardRef((props, ref) => {
  const curRef = useRef(null);
  const { placeholder } = props;

  return (
    <Container>
      <Input placeholder={placeholder ?? undefined} />
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
