import { createBrowserRouter } from "react-router-dom";
import GlobalNavigation from "components/global/GNB";
import Home from "pages/home/Home";
import My_profile from "pages/my_profile/My_profile";
import Profiles from "pages/profiles/Profiles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalNavigation />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my",
        element: <My_profile />,
      },
      {
        path: "/profiles",
        element: <Profiles />,
      },
    ],
  },
]);

export default router;
