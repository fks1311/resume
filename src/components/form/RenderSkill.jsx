import { useEffect, forwardRef } from "react";
import { useFieldArray } from "react-hook-form";
import { styled } from "styled-components";

const RenderSkill = forwardRef((props, ref) => {
  const { register, control, idx } = props;
  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: `career.${idx}.use_skill`,
  });

  useEffect(() => {}, []);

  return (
    <>
      {skillFields.map((skillField, skillIndex) => (
        <HashInput
          key={skillField.id}
          {...register(`career.${idx}.use_skill.${skillIndex}`)}
          placeholder="사용스킬"
        />
      ))}
      <button type="button" onClick={() => appendSkill("")}>
        Add Skill
      </button>
    </>
  );
});

const HashInput = styled.input`
  padding: 0px 0px 8px 0px;
  outline: none;
  border: none;
  border-bottom: 1px solid #eeedeb;
`;

export default RenderSkill;
