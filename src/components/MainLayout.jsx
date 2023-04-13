import { Box, Button, Container } from "@mui/material";
import Topbar from "./Topbar";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function MainLayout(props) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutUser = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box sx={{ backgroundColor: "#EDF2F7", pb: 5 }}>
      <Topbar title="PapaBill Super Store">
        {isLoggedIn ? (
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
              onClick={logoutUser}
            >
              Log out
            </Button>
          </>
        ) : (
          <NavLink to="/login">
            <Button
              variant="contained"
              color="inherit"
              sx={{ backgroundColor: "#EDF2F7", textTransform: "none" }}
            >
              I`m already a customer
            </Button>
          </NavLink>
        )}
      </Topbar>
      <Container component="main" sx={{ maxWidth: "1280px" }}>
        {props.children}
      </Container>
    </Box>
  );
}
