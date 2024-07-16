import { forwardRef } from "react";
import { useFieldArray } from "react-hook-form";
import { styled } from "styled-components";

const RenderSkill = forwardRef((props, ref) => {
  const { register, control, idx, autoRowsHeight } = props;
  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: `career.${idx}.use_skill`,
  });

  const handleEnterKeyPress = (e, idx, skillIndex) => {
    const documentName = document.getElementsByName(
      `career.${idx}.use_skill.${skillIndex}.skill`
    );

    if (e.key === "Enter") {
      e.preventDefault();
      // documentName[0].style.padding = "8px 12px";
      documentName[0].style.textAlign = "center";
      documentName[0].style.color = "#fff";
      documentName[0].style.fontWeight = "700";
      documentName[0].style.borderRadius = "56px";
      documentName[0].style.backgroundColor = "#478ccf";
      appendSkill("");
    }
  };

  return (
    <Container className="RenderSkill">
      {skillFields.map((skillField, skillIndex) => (
        <HashInput
          key={skillField.id}
          {...register(`career.${idx}.use_skill.${skillIndex}.skill`)}
          placeholder="사용스킬"
          onKeyDown={(e) => {
            handleEnterKeyPress(e, idx, skillIndex);
            autoRowsHeight(e);
          }}
        />
      ))}
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const HashInput = styled.input`
  // padding: 0px 0px 8px 0px;
  outline: none;
  border: none;
  border-bottom: 1px solid #eeedeb;
`;

export default RenderSkill;
