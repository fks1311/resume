import { useEffect, useState, useRef, forwardRef } from "react";
import { styled } from "styled-components";

const ProjectColumn = forwardRef((props, ref) => {
  const { length } = props;

  const rowRef = useRef();
  const [value, setValue] = useState();
  const [vl, setVl] = useState();

  const handlerInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    rowRef.current.style.height = "0";
    rowRef.current.style.height = rowRef.current.scrollHeight + "px";
    setVl(rowRef.current.getBoundingClientRect().height + 105);
  }, [value]);

  return (
    <ViewContainer>
      <DotContainer>
        <Dot />
        {length >= 2 && <VLine vl={vl} />}
      </DotContainer>
      <Content>
        <Project>
          <input placeholder="프로젝트명" />
          <input placeholder="기간" />
          <input placeholder="사용 기술" />
        </Project>
        <Rows ref={rowRef} value={value || ""} onChange={handlerInput} />
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
  height: 105px;
  // width: 550px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
    width: 400px;
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
