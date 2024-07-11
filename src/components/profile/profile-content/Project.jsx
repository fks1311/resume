import ProjectColumn from "components/form/ProjectColumn";
import { styled } from "styled-components";
import { useState, forwardRef } from "react";

const Project = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([1]);

  const addProject = (e) => {
    setCount((c) => c + 1);
    setList((prev) => [...prev, count]);
  };

  return (
    <Container className="project">
      <h1>프로젝트</h1>
      <ProjectContainer>
        {list.map((_, idx) => (
          <ProjectColumn key={idx} />
        ))}
        <Button onClick={addProject}>프로젝트 추가하기</Button>
      </ProjectContainer>
    </Container>
  );
});

const Container = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  h1 {
    width: 150px;
    margin: 20px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
`;
const ProjectContainer = styled.div`
  // width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 20px;
`;

const Button = styled.div`
  width: 550px;
  padding: 8px 12px;
  color: #f6f5f5;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #478ccf;
  cursor: pointer;
`;
export default Project;
