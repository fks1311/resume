import HashTagWrap from "components/form/HashTagWrap";
import { forwardRef } from "react";
import { styled } from "styled-components";

const UsableSkill = forwardRef((props, ref) => {
  return (
    <Container className="usable-skill">
      <h1>기술 스택</h1>
      <SkillContainer>
        <HashTagWrap placeholder={"사용 가능한 기술 태그를 입력하세요"} />
      </SkillContainer>
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
const SkillContainer = styled.div`
  margin: 1rem;
`;

export default UsableSkill;
