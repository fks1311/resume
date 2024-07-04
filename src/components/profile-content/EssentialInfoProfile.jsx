import { forwardRef } from "react";
import { styled } from "styled-components";
import Images from "components/inputs/Images";
import FormColumn from "components/form/FormColumn";
import {
  BsFillPersonFill,
  BsTelephone,
  BsGithub,
  BsLink,
} from "react-icons/bs";

const EssentialInfoProfile = forwardRef(({ children }, ref) => {
  return (
    <Container className="essential-info">
      <Images />
      <BasicInfoInput>
        <FormColumn render={() => <BsFillPersonFill />} />
        <FormColumn render={() => <BsTelephone />} />
        <FormColumn render={() => <BsGithub />} />
        <FormColumn render={() => <BsLink />} />
      </BasicInfoInput>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
const BasicInfoInput = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export default EssentialInfoProfile;
