import { forwardRef } from "react";
import { styled } from "styled-components";

const Images = forwardRef(({ children }, ref) => {
  return <IMGContainer>이미지 컴포넌트</IMGContainer>;
});

const IMGContainer = styled.div`
  height: 300px;
  width: 300px;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eeeeee;
  border-radius: 10px;
`;

export default Images;
