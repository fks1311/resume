import { forwardRef } from "react";
import { styled } from "styled-components";

const Profile = forwardRef(({ children }, ref) => {
  return (
    <ViewContainer className="profile-container">{children}</ViewContainer>
  );
});

const ViewContainer = styled.div``;

export default Profile;
