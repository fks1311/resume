import { forwardRef } from "react";
import { styled } from "styled-components";
import TextInput from "components/inputs/TextInput";

const FormColumn = forwardRef((props, ref) => {
  const { render, ftSize } = props;

  return (
    <Container className="FormColumn">
      {render && <TitleColumn>{render()}</TitleColumn>}
      <TextInput ftSize={ftSize} />
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  align-items: center;
  align-items: flex-end;
  gap: 0.5rem;
`;
const TitleColumn = styled.div``;

export default FormColumn;
