import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  CardContent,
  CardActions,
  Snackbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import VerifyDialog from "./Verify";
import AuthLayout from "../components/AuthLayout";

export default function SignIn() {
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
  const handleChange = (newPhone) => {
    setActive(matchIsValidTel(newPhone));
    setPhone(newPhone);
  };

  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <AuthLayout title="Login or create your account">
      <CardContent sx={{ p: notMobile ? "40px" : "20px" }}>
        <Typography
          variant="caption"
          align="left"
          sx={{ color: "#718096" }}
          display="block"
          gutterBottom
        >
          Enter your Mobile Number, we will send you a code via SMS for
          Verfication.
        </Typography>

        <Box sx={{ my: 4 }}>
          <MuiTelInput fullWidth value={phone} onChange={handleChange} />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ my: 2, height: "60px" }}
            disabled={!isActive}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Box>
      </CardContent>
      <CardActions sx={{ borderTop: 1, py: 4, borderTopColor: "black.light" }}>
        <Button size="small" color="black" sx={{ textTransform: "capitalize" }}>
          Come Back
        </Button>
      </CardActions>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnack}
        onClose={closeSnack}
        message="SMS Sent Successfully"
      />
      <VerifyDialog open={dialogOpen} onClose={dialogClose} />
    </AuthLayout>
  );
}
