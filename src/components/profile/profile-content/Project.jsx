import { useState, forwardRef } from "react";
import { useFieldArray } from "react-hook-form";
import { styled } from "styled-components";
import ProjectColumn from "components/form/ProjectColumn";

const Project = forwardRef((props, ref) => {
  const { register, control, errors } = props;
  const [count, setCount] = useState(0);
  const [list, setList] = useState([1]);
  const { fields, append } = useFieldArray({
    control,
    name: "project",
  });

  const addProject = (e) => {
    setCount((c) => c + 1);
    setList((prev) => [...prev, count]);
    append({
      subject: "",
      start_period: "",
      end_period: "",
      use_skill: [{ skill: "" }],
      content: "",
    });
  };

  return (
    <Container className="project">
      <h1>프로젝트</h1>
      <ProjectContainer>
        {fields.map((field, idx) => {
          return (
            <ProjectColumn
              key={field.id}
              idx={idx}
              register={register}
              control={control}
              length={list.length}
            />
          );
        })}
        <Button onClick={addProject}>프로젝트 추가하기</Button>
      </ProjectContainer>
    </Container>
  );
});

const Container = styled.div`
  // max-width: 800px;
  display: flex;
  align-items: flex-start;
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
