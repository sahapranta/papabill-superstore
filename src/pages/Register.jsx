import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  CardContent,
  CardActions,
  useTheme,
  TextField,
  FormControl,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import AuthLayout from "../components/AuthLayout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

export default function Register() {
  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const register = () => {
    dispatch(login());
    navigate("/");
  };

  return (
    <AuthLayout title="Login or create your account">
      <CardContent sx={{ p: notMobile ? "40px" : "20px" }}>
        <Typography variant="h5">We are almost there</Typography>
        <Typography
          variant="caption"
          align="left"
          sx={{ mt: 1, color: "#718096" }}
          display="block"
          gutterBottom
        >
          To continue we need some data
        </Typography>

        <Box sx={{ mt: 4, mb: 1 }}>
          <FormControl fullWidth>
            <TextField required label="Name" defaultValue="Johnny" />
          </FormControl>
          <FormControl fullWidth sx={{ mt: 4 }}>
            <TextField
              required
              label="Email"
              defaultValue="john_appleseed@gmail.com"
            />
          </FormControl>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          borderTop: 1,
          py: 3,
          mx: 2,
          borderTopColor: "black.light",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button size="small" color="black" sx={{ textTransform: "capitalize" }}>
          Come Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "capitalize" }}
          onClick={register}
        >
          Register
        </Button>
      </CardActions>
    </AuthLayout>
  );
}
