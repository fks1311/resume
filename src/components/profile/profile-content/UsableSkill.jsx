import { forwardRef } from "react";
import { styled } from "styled-components";
import HashTagWrap from "components/form/HashTagWrap";

const UsableSkill = forwardRef((props, ref) => {
  const { register, errors } = props;

  return (
    <Container className="usable-skill">
      <h1>기술 스택</h1>
      <SkillContainer>
        <HashTagWrap
          id="skill"
          register={register}
          placeholder={"사용 가능한 기술 태그를 입력하세요"}
        />
      </SkillContainer>
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
const SkillContainer = styled.div`
  // width: 400px;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export default UsableSkill;
