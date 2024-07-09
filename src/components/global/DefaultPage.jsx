import { forwardRef } from "react";
import { styled } from "styled-components";

const DefaultPage = forwardRef(({ children }, ref) => {
  return <PageContainer className="default-page">{children}</PageContainer>;
});

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export default DefaultPage;
