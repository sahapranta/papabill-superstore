import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useNavigate } from "react-router-dom";

export default function VerifyDialog(props) {
  const navigate = useNavigate();
  const { onClose, open } = props;

  const [otp, setOtp] = useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const handleClose = () => {
    onClose(otp);
    setOtp("");
  };

  const handleComplete = (value) => {
    console.log(value);
    return navigate("/register");
  };

  return (
    <Dialog
      maxWidth="xs"
      sx={{ borderRadius: "10px" }}
      onClose={handleClose}
      open={open}
    >
      <DialogTitle>
        Login or create your account
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ mb: 2 }}>
        <Typography
          variant="caption"
          align="left"
          sx={{ color: "#718096", my: 3 }}
          display="block"
          gutterBottom
        >
          We send a code via SMS to the sell phone provided. Please enter it to
          log into your account
        </Typography>
        <MuiOtpInput
          value={otp}
          onChange={handleChange}
          length={6}
          onComplete={handleComplete}
          TextFieldsProps={{ padding: "10px" }}
        />
      </DialogContent>
    </Dialog>
  );
}
