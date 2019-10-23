import React from "react";
import { CssBaseline } from "@material-ui/core";

import Header from "../Header/Header";
import Main from "../Main/Main";

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Main />
    </>
  );
};

export default Layout;
