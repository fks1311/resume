import { useEffect, useState, useRef, forwardRef } from "react";
import { styled } from "styled-components";
import RenderSkill from "./RenderSkill";

const CareerColumn = forwardRef((props, ref) => {
  const { register, control, idx, length } = props;

  const rowRef = useRef();
  const [value, setValue] = useState("");
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
    <Container>
      <Date className="date">
        <DotContainer>
          <Dot />
          {length >= 2 && <VLine vl={vl} />}
        </DotContainer>
        <input
          {...register(`career.${idx}.start_period`)}
          type="date"
          placeholder="기간"
        />
        ~
        <input
          {...register(`career.${idx}.end_period`)}
          type="date"
          placeholder="기간"
        />
      </Date>
      <Content className="content">
        <Company>
          <input {...register(`career.${idx}.office`)} placeholder="회사명" />
          <RenderSkill idx={idx} register={register} control={control} />
          {/* <input
            {...register(`career.${idx}.use_skill.${idx}`)}
            placeholder="사용스킬"
          /> */}
        </Company>
        <Rows
          ref={rowRef}
          value={value || ""}
          placeholder="기술 이력"
          onChange={handlerInput}
        />
      </Content>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Date = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  input {
    padding: 0px 0px 8px 0px;
    outline: none;
    border: none;
    border-bottom: 1px solid #eeedeb;
  }
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
  gap: 1rem;
`;
const Company = styled.div`
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
  // padding: 0px 0px 8px 0px;
  resize: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #eeedeb;
`;

export default CareerColumn;
