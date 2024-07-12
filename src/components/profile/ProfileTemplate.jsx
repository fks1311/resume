import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import EssentialInfoProfile from "components/profile/profile-content/EssentialInfoProfile";
import OccupationProfile from "components/profile/profile-content/OccupationProfile";
import UsableSkill from "components/profile/profile-content/UsableSkill";
import SimpleIntroduce from "./profile-content/SimpleIntroduce";
import Career from "./profile-content/Career";
import Project from "./profile-content/Project";

const ProfileTemplate = forwardRef(({ children }, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.group("실행");
    console.log(data);
    console.groupEnd();
  };
  const onInValid = (errors) => console.log("실패", errors);

  return (
    <ViewContainer onSubmit={handleSubmit(onValid, onInValid)}>
      <EssentialInfoProfile register={register} errors={errors} />
      {/* <SimpleIntroduce register={register} errors={errors} />
      <OccupationProfile register={register} errors={errors} />
      <UsableSkill register={register} errors={errors} />
      <Career register={register} errors={errors} />
      <Project register={register} errors={errors} /> */}
      <Button>저장하기</Button>
    </ViewContainer>
  );
});

const ViewContainer = styled.form`
  width: inherit;
  max-width: 820px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #eeedeb;
  border-radius: 10px;
`;
const Button = styled.button`
  padding: 10px 12px;
  color: #f6f5f5;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #478ccf;
  cursor: pointer;
`;

export default ProfileTemplate;
