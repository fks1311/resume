import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import EssentialInfoProfile from "components/profile/profile-content/EssentialInfoProfile";
import OccupationProfile from "components/profile/profile-content/OccupationProfile";
import UsableSkill from "components/profile/profile-content/UsableSkill";

const ProfileTemplate = forwardRef(({ children }, ref) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <ViewContainer className="profile-container">
      <EssentialInfoProfile />
      <OccupationProfile />
      <UsableSkill />
    </ViewContainer>
  );
});

const ViewContainer = styled.form`
  width: inherit;
  max-width: 960px;
  padding: 1rem;
  border: 1px solid #eeedeb;
  border-radius: 10px;
`;

export default ProfileTemplate;
