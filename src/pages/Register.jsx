import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Snackbar,
  useTheme,
  TextField,
  FormControl,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import AuthLayout from "../components/AuthLayout";

export default function Register() {
  const [phone, setPhone] = useState("");
  const [isActive, setActive] = useState(false);
  const [openSnack, setSnack] = useState(false);
  const [dialogOpen, setDialog] = useState(false);

  const handleSubmit = () => {
    if (isActive) {
      setSnack(true);
      setDialog(true);
    }
  };
  const dialogClose = () => {
    setDialog(false);
  };

  const closeSnack = () => {
    setSnack(false);
  };

  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up("sm"));

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
        >
          Register
        </Button>
      </CardActions>
    </AuthLayout>
  );
}
