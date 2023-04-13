import React from "react";
import { AppBar, Typography, Toolbar, Container } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
export default function Topbar(props) {
  return (
    <AppBar
      component="nav"
      position="static"
      color="inherit"
      enableColorOnDark
      sx={{ py: 1 }}
    >
      <Container sx={{ maxWidth: "1280px" }}>
        <Toolbar>
          {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
            {props.title}
          </Typography>
          {props.children}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
