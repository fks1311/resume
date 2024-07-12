import { useState, useCallback, forwardRef } from "react";
import { Controller, useFieldArray } from "react-hook-form";
import { styled } from "styled-components";

const HashTagWrap = forwardRef((props, ref) => {
  const { register, control, placeholder, ...rest } = props;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "email",
    }
  );
  const [hashtagArray, setHashtagArray] = useState([]);
  const [value, setValue] = useState("");

  const handlerTag = (e) => {
    setValue(e.target.value);
  };

  // e.key === "Enter"
  // e.key === " " || e.code === "Space" || e.keyCode === 32
  const handleEnterKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        // 한글 입력 시, 마지막 글자 입력 + 공백 에러 처리
        // const trimmedValue = value.trim();
        // if (trimmedValue !== "") {
        //   setHashtagArray((prev) => [...prev, trimmedValue]);
        //   setValue("");
        //   e.preventDefault();
        //   append({ email: "" });
        // }
        e.preventDefault();
        append({ email: "" });
      }
    },
    [value]
  );

  return (
    <Container>
      <HashWrap>
        {hashtagArray.map((tag, idx) => (
          <HashTag key={idx}>{tag}</HashTag>
        ))}
      </HashWrap>
      {fields.map((field, index) => {
        return (
          <li key={field.id}>
            <input
              {...register(`email.${index}.name`, { required: true })}
              onKeyUp={handleEnterKeyPress}
            />

            {/* <Controller
              render={({ field }) => <input {...field} />}
              name={`test.${index}.lastName`}
              control={control}
            /> */}
          </li>
        );
      })}
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const HashWrap = styled.div`
  width: 550px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const HashTag = styled.div`
  padding: 8px 12px;
  color: #fff;
  font-weight: 700;
  border-radius: 56px;
  background-color: #478ccf;
`;
const HashInput = styled.input`
  width: 550px;
  padding: 5px;
  white-space: pre-wrap;
  outline: none;
  border: none;
  border-bottom: 1px solid #eeedeb;
`;

const Input = styled.input``;

export default HashTagWrap;
