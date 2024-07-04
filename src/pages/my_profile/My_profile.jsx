import { MDXProvider } from "@mdx-js/react";
import DefaultPage from "components/global/DefaultPage";
import ME from "mdx/me.mdx";

export default function My_profile() {
  return (
    <DefaultPage>
      <MDXProvider>
        <ME />
      </MDXProvider>
    </DefaultPage>
  );
}
