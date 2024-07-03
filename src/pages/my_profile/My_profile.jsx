import { MDXProvider } from "@mdx-js/react";
import DefaultPage from "../../global/DefaultPage";
import Home from "../home/Home";
import TEST from "../../mdx/test.mdx";

export default function My_profile() {
  const components = { Home };

  return (
    <DefaultPage>
      <MDXProvider components={components}>
        <TEST />
      </MDXProvider>
    </DefaultPage>
  );
}
