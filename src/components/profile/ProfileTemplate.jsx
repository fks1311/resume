import { forwardRef } from "react";
import { styled } from "styled-components";
import EssentialInfoProfile from "components/profile/profile-content/EssentialInfoProfile";
import OccupationProfile from "components/profile/profile-content/OccupationProfile";

const ProfileTemplate = forwardRef(({ children }, ref) => {
  return (
    <ViewContainer className="profile-container">
      <EssentialInfoProfile />
      <OccupationProfile />
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
