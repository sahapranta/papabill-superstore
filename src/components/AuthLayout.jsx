import React from "react";
import { Card, CardHeader, Box, useTheme, useMediaQuery } from "@mui/material";

export default function AuthLayout(props) {
  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box
      sx={{
        display: notMobile ? "flex" : "block",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#E9EEF4",
        height: "100dvh",
      }}
    >
      <Card
        sx={{
          maxWidth: 720,
          maxHeight: 600,
          borderRadius: "10px",
        }}
      >
        <CardHeader
          title={props.title}
          sx={{ bgcolor: "black.main", color: "#fff" }}
        />
        {props.children}
      </Card>
    </Box>
  );
}
