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
  width: 40%;
  font-size: ${({ $ftSize }) => `${$ftSize}px` ?? undefined};
  outline: none;
  border: none;
  border-bottom: 1px solid #333;
`;

export default TextInput;
