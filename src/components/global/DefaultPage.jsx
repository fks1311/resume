import { forwardRef } from "react";
import { styled } from "styled-components";

const DefaultPage = forwardRef(({ children }, ref) => {
  return (
    <PageContainer className="default-page">
      {children}
      {/* <ViewContainer className="default-view">{children}</ViewContainer> */}
    </PageContainer>
  );
});

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const ViewContainer = styled.div`
  width: inherit;
  max-width: 1200px;
`;

export default DefaultPage;
