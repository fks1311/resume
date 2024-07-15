import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import router from "./Router";
import "./style/font/font.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    font-family: 'HakgyoansimWoojuR', sans-serif;
  }
`;

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
