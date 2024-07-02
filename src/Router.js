import { createBrowserRouter } from "react-router-dom";
import GlobalNavigation from "./global/GNB";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalNavigation />,
    children: [],
  },
]);

export default router;
