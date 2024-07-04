import { forwardRef } from "react";
import { styled } from "styled-components";
import HashTagWrap from "components/form/HashTagWrap";

const OccupationProfile = forwardRef((props, ref) => {
  return (
    <Container className="occupation">
      <h1>직군 및 직무</h1>
      <JobContainer>
        <HashTagWrap placeholder={"직군 태그를 입력하세요"} />
        <HashTagWrap placeholder={"직무 태그를 입력하세요"} />
      </JobContainer>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  align-items: center;
  h1 {
    width: 100px;
    margin: 1rem;
    text-align: center;
  }
`;
const JobContainer = styled.div`
  display: flex;
  gap: 3rem;
  margin: 1rem;
`;

export default OccupationProfile;
