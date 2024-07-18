import { useState, useRef, forwardRef, useCallback } from "react";
import { styled } from "styled-components";
import RenderSkill from "./RenderSkill";

const ProjectColumn = forwardRef((props, ref) => {
  const { register, control, idx, length } = props;

  const projectRef = useRef();
  const rowRef = useRef();
  const [value, setValue] = useState();
  const [vl, setVl] = useState();

  const autoRowsHeight = useCallback((e, id) => {
    id === "rows" && setValue(e.target.value);
    rowRef.current.style.height = "0";
    rowRef.current.style.height = rowRef.current.scrollHeight + "px";
    setVl(
      projectRef.current.getBoundingClientRect().height +
        rowRef.current.scrollHeight +
        10
    );
  }, []);

  return (
    <ViewContainer>
      <DotContainer>
        <Dot />
        {length >= 2 && <VLine vl={vl} />}
      </DotContainer>
      <Content>
        <Project ref={projectRef}>
          <input
            {...register(`project.${idx}.subject`)}
            placeholder="프로젝트명"
          />
          <div style={{ display: "flex" }}>
            <input
              type="date"
              {...register(`project.${idx}.start_period`)}
              placeholder="기간"
            />
            <input
              type="date"
              {...register(`project.${idx}.end_period`)}
              placeholder="기간"
            />
          </div>
          <RenderSkill
            idx={idx}
            name="project"
            {...{ control, register }}
            autoRowsHeight={autoRowsHeight}
          />
        </Project>
        <Rows
          ref={rowRef}
          value={value || ""}
          placeholder="기술 이력"
          onChange={(e) => autoRowsHeight(e, "rows")}
        />
      </Content>
    </ViewContainer>
  );
});

const ViewContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;
const DotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 3px solid #478ccf;
`;
const VLine = styled.div`
  height: ${({ vl }) => vl}px;
  border-left: 3px solid #478ccf;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const Project = styled.div`
  // height: 105px;
  // width: 550px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
    // width: 400px;
    padding: 0px 0px 8px 0px;
    outline: none;
    border: none;
    border-bottom: 1px solid #eeedeb;
  }
`;
const Rows = styled.textarea`
  // width: 550px;
  resize: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #eeedeb;
`;

export default ProjectColumn;
