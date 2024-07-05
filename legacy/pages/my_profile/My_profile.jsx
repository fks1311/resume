import { MDXProvider } from "@mdx-js/react";
import { styled } from "styled-components";
import DefaultPage from "components/global/DefaultPage";
import ME from "mdx/me.mdx";

export default function My_profile() {
  return (
    <DefaultPage>
      <ViewContainer>
        <MDXProvider>
          <ME />
        </MDXProvider>
      </ViewContainer>
    </DefaultPage>
  );
}

const ViewContainer = styled.form`
  width: inherit;
  max-width: 960px;
  padding: 1rem;
  border: 1px solid #eeedeb;
  border-radius: 10px;
`;

{
  /* <DefaultPage>
  <MDXProvider>
    <ME />
  </MDXProvider>
</DefaultPage>; */
}
