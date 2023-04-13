import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      light: "#EDF2F7",
      main: "#1E21FF",
    },
    black: {
      light: "#e0e0e0",
      main: "#262626",
    },
    success: {
      main: "#51BC6D",
    },
    danger: {
      main: "#FF705C",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
