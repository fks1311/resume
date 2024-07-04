import { forwardRef } from "react";
import { styled } from "styled-components";
import EssentialInfoProfile from "components/profile-content/EssentialInfoProfile";

const Profile = forwardRef(({ children }, ref) => {
  return (
    <ViewContainer className="profile-container">
      <EssentialInfoProfile />
    </ViewContainer>
  );
});

const ViewContainer = styled.form`
  width: inherit;
  max-width: 1000px;
  padding: 1rem;
  border: 1px solid #eeedeb;
  border-radius: 10px;
`;

export default Profile;
