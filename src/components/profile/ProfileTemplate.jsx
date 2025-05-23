import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userInfoStateAtom } from "utils/atom";
import { styled } from "styled-components";

import EssentialInfoProfile from "components/profile/profile-content/EssentialInfoProfile";
import SimpleIntroduce from "components/profile/profile-content/SimpleIntroduce";
import OccupationProfile from "components/profile/profile-content/OccupationProfile";
import UsableSkill from "components/profile/profile-content/UsableSkill";
import Career from "components/profile/profile-content/Career";
import Project from "components/profile/profile-content/Project";
import createFile from "utils/createFile";
import getFile from "utils/getFile";

const ProfileTemplate = forwardRef(({ children }, ref) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoStateAtom);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      career: [
        {
          office: "",
          start_period: "",
          end_period: "",
          use_skill: [{ skill: "" }],
          content: "",
        },
      ],
      project: [
        {
          subject: "",
          start_period: "",
          end_period: "",
          use_skill: [{ skill: "" }],
          content: "",
        },
      ],
    },
  });

  const onValid = (data) => {
    console.log("onValid >>>", data);
    // setUserInfo((prev) => ({
    //   ...prev,
    //   ...data,
    // }));
    // console.log(userInfo);
    // createFile("me", data);
  };
  const onInValid = (errors) => console.log("실패", errors);

  return (
    <ViewContainer
      className="profile"
      onSubmit={handleSubmit(onValid, onInValid)}
    >
      {/* <EssentialInfoProfile register={register} errors={errors} /> */}
      {/* <SimpleIntroduce register={register} errors={errors} /> */}
      {/* <OccupationProfile register={register} errors={errors} /> */}
      <UsableSkill register={register} errors={errors} />
      <Career register={register} control={control} errors={errors} />
      <Project register={register} control={control} errors={errors} />
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
