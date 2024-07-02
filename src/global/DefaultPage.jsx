import { forwardRef } from "react";
import { styled } from "styled-components";

const DefaultPage = forwardRef((props, ref) => {
  return <PageContainer>DefaultPage</PageContainer>;
});

const PageContainer = styled.div``;

export default DefaultPage;
