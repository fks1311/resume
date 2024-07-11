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
  // max-width: 800px;
  display: flex;
  align-items: center;
  // justify-content: center;
  border-bottom: 1px solid #f6f5f5;
  h1 {
    width: 150px;
    margin: 20px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
`;
const JobContainer = styled.div`
  // width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 20px;
`;

export default OccupationProfile;
