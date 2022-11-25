import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

export const mainTheme = (Component: JSX.Element) => {
  return <ThemeProvider theme={theme}>{Component}</ThemeProvider>;
};
