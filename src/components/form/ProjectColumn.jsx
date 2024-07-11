import { useEffect, useState, useRef, forwardRef } from "react";
import { styled } from "styled-components";

const ProjectColumn = forwardRef((props, ref) => {
  const rowRef = useRef();
  const [value, setValue] = useState();

  const handlerInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    rowRef.current.style.height = "auto";
    rowRef.current.style.height = rowRef.current.scrollHeight + "px";
  }, [value]);

  return (
    <ViewContainer>
      <Project>
        <input placeholder="프로젝트명" />
        <input placeholder="기간" />
        <input placeholder="사용 기술" />
      </Project>
      <Rows ref={rowRef} value={value || ""} onChange={handlerInput} />
    </ViewContainer>
  );
});

const ViewContainer = styled.div``;
const Project = styled.div`
  height: 105px;
  width: 550px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
    padding: 0px 0px 8px 0px;
    outline: none;
    border: none;
    border-bottom: 1px solid #eeedeb;
  }
`;
const Rows = styled.textarea`
  width: 550px;
  resize: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #eeedeb;
`;

export default ProjectColumn;
