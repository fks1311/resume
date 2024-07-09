import { useState, useCallback, forwardRef, useRef } from "react";
import { styled } from "styled-components";
import TextInput from "components/inputs/TextInput";

const HashTagWrap = forwardRef((props, ref) => {
  const curRef = useRef();
  const [hashtagArray, setHashtagArray] = useState(["23"]);
  const [value, setValue] = useState("");
  const { placeholder } = props;

  const handlerTag = (e) => {
    setValue(e.target.value);
  };

  const handleEnterKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        setHashtagArray((prev) => [...prev, value]);
        setValue("");
        console.log(curRef.current.getBoundingClientRect());
      }
    },
    [value]
  );

  return (
    <Container className="container">
      {hashtagArray.map((tag, idx) => (
        <DynamicTag
          key={idx}
          width={curRef?.current?.getBoundingClientRect()?.width}
        >
          {tag}
        </DynamicTag>
      ))}
      <Tag ref={curRef}>
        <input
          value={value || ""}
          onKeyDown={handleEnterKeyPress}
          onChange={handlerTag}
        />
      </Tag>
    </Container>
  );
});

const Container = styled.div``;
const DynamicTag = styled.div`
  width: ${({ width }) => width}px;
  // width: 20px;
  border-radius: 56px;
  padding: 8px 12px;
  background-color: #478ccf;
`;
const Tag = styled.span`
  // width: 380px;
  // padding: 5px;
  // font-size: 16px;
  // outline: none;
  // border: none;
  // border-bottom: 1px solid #eeedeb;
`;

export default HashTagWrap;
