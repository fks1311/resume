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
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    width: 300px;
    text-align: center;
    margin: 20px;
  }
`;
const JobContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export default OccupationProfile;
