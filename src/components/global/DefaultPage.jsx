import { forwardRef } from "react";
import { styled } from "styled-components";

const DefaultPage = forwardRef(({ children }, ref) => {
  return (
    <PageContainer className="page">
      <ViewContainer className="view">{children}</ViewContainer>
    </PageContainer>
  );
});

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;
const ViewContainer = styled.div`
  width: inherit;
  max-width: 1200px;
`;

export default DefaultPage;
