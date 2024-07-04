import { forwardRef } from "react";
import { styled } from "styled-components";
import TextInput from "components/inputs/TextInput";

const HashTagWrap = forwardRef((props, ref) => {
  const { placeholder } = props;

  return (
    <Container>
      <DynamicTag />
      <TextInput placeholder={placeholder} />
    </Container>
  );
});

const Container = styled.div``;
const DynamicTag = styled.div``;

export default HashTagWrap;
