import { Box, Button, Container } from "@mui/material";
import Topbar from "./Topbar";

export default function MainLayout(props) {
  const { loggedIn } = props;

  return (
    <Box sx={{ backgroundColor: "#EDF2F7", pb: 5 }}>
      <Topbar title="PapaBill Super Store">
        {loggedIn ? (
          <>
            <Button
              variant="contained"
              color="inherit"
              size="small"
              sx={{
                backgroundColor: "#EDF2F7",
                mr: 2,
                borderRadius: "50%",
                px: 1,
                minWidth: "30px",
              }}
            >
              J
            </Button>
            <Button
              variant="contained"
              color="inherit"
              size="small"
              sx={{ backgroundColor: "#EDF2F7", textTransform: "none" }}
            >
              Log out
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            color="inherit"
            sx={{ backgroundColor: "#EDF2F7", textTransform: "none" }}
          >
            I`m already a customer
          </Button>
        )}
      </Topbar>
      <Container component="main" sx={{ maxWidth: "1280px" }}>
        {props.children}
      </Container>
    </Box>
  );
}
