import HashTagWrap from "components/form/HashTagWrap";
import { forwardRef } from "react";
import { styled } from "styled-components";

// 기술 스택
const UsableSkill = forwardRef((props, ref) => {
  return (
    <Container className="usable-skill">
      <h1>해시</h1>
      <SkillContainer>
        <HashTagWrap placeholder={"사용 가능한 기술 태그를 입력하세요"} />
      </SkillContainer>
    </Container>
  );
});

const Container = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  // justify-content: center;
  h1 {
    width: 150px;
    margin: 20px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
`;
const SkillContainer = styled.div`
  // width: 400px;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export default UsableSkill;
