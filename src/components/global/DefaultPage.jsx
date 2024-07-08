import { forwardRef } from "react";
import { styled } from "styled-components";

const DefaultPage = forwardRef(({ children }, ref) => {
  return <PageContainer className="default-page">{children}</PageContainer>;
});

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default DefaultPage;
