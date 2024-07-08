// 필수
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
      <BasicInfoInput className="basic-input-container">
        <FormColumn render={() => <BsFillPersonFill />} ftSize={40} />
        <FormColumn render={() => <BsTelephone />} />
        <FormColumn render={() => <BsGithub />} />
        <FormColumn render={() => <BsLink />} />
      </BasicInfoInput>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
`;
const BasicInfoInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
`;

export default EssentialInfoProfile;
