import { MDXProvider } from "@mdx-js/react";
import DefaultPage from "components/global/DefaultPage";
import Profile from "components/profile/Profile";
import Home from "pages/home/Home";
import TEST from "mdx/test.mdx";

export default function My_profile() {
  const components = { Home };

  return (
    <DefaultPage>
      <Profile>
        <MDXProvider components={components}>
          <TEST />
        </MDXProvider>
      </Profile>
    </DefaultPage>
  );
}
