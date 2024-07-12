import { forwardRef } from "react";
import { styled } from "styled-components";
import TextInput from "components/inputs/TextInput";

const FormColumn = forwardRef((props, ref) => {
  const { render, id, errors, ...rest } = props;

  return (
    <Container className="FormColumn" id={id}>
      <TitleColumn>
        {render && <div>{render()}</div>}
        <TextInput ref={ref} {...rest} />
      </TitleColumn>
      {errors[id] && <ErrorMSG>{errors[id].message}</ErrorMSG>}
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const ErrorMSG = styled.p`
  color: #ff006f;
  font-size: 14px;
  padding: 6px;
  text-align: center;
`;

export default FormColumn;
