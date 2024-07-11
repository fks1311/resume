import { useState, forwardRef } from "react";
import { styled } from "styled-components";
import CareerColumn from "components/form/CareerColumn";

const Career = forwardRef(() => {
  const [count, setCount] = useState(0);
  const [histories, setHistories] = useState([1]);

  const addCareer = (e) => {
    setCount((c) => c + 1);
    setHistories((prev) => [...prev, count]);
  };

  return (
    <ViewContainer className="career">
      <h1>경력</h1>
      <Container>
        <CareerContainer>
          {histories.map((_, idx) => (
            <CareerColumn key={idx} length={histories.length} />
          ))}
        </CareerContainer>
        <Button onClick={addCareer}>경력 추가하기</Button>
      </Container>
    </ViewContainer>
  );
});

const ViewContainer = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  // justify-content: center;
  h1 {
    width: 150px;
    margin: 20px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 20px;
`;
const CareerContainer = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 0.5rem;
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

export default Career;
