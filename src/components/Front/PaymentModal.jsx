import React from "react";
import {
  Dialog,
  DialogTitle,
  IconButton,
  Box,
  Button,
  Typography,
  Stack,
  Card,
  Checkbox,
  Link,
} from "@mui/material";

import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
export default function PaymentModal(props) {
  const { open, handleClose } = props;

  const onModalClose = () => {
    handleClose();
  };
  return (
    <Dialog
      maxWidth="md"
      sx={{ borderRadius: "10px" }}
      onClose={onModalClose}
      open={open}
    >
      <Box sx={{ backgroundColor: "#262626", color: "#fff" }}>
        <DialogTitle>
          Choose the form of payment
          <IconButton
            aria-label="close"
            onClick={onModalClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#fff",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      </Box>
      <Box sx={{ p: 2, width: "580px" }}>
        <Typography>Selected plan</Typography>
        <Card variant="outlined" sx={{ borderRadius: "15px", p: 2, my: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Super plan 3/w</Typography>
            <Box>
              <Typography component="span" sx={{ fontWeight: 500 }}>
                Rp 350.00 /
              </Typography>{" "}
              <Typography component="small" sx={{ color: "#718096" }}>
                6 months
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2" sx={{ color: "#718096", mt: 2 }}>
            8 sessions · 1 month
          </Typography>
        </Card>
        <Typography variant="h4" sx={{ my: 3 }}>
          Choose a way to pay
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <Button
            variant="contained"
            color="inherit"
            sx={{
              textTransform: "none",
              backgroundColor: "transparent",
              borderColor: "#262626",
            }}
            fullWidth
          >
            Cash
          </Button>
          <Button
            variant="contained"
            color="inherit"
            sx={{
              textTransform: "none",
              backgroundColor: "primary.light",
            }}
            fullWidth
          >
            Credit card
          </Button>
          <Button
            variant="contained"
            color="inherit"
            sx={{
              textTransform: "none",
              backgroundColor: "primary.light",
            }}
            fullWidth
          >
            eWallet/Virtual bank
          </Button>
        </Stack>
        <Box sx={{ fontSize: "0.8rem", color: "#718096" }}>
          <Checkbox label="checkbox" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
          <Link>do eiusmod</Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
          }}
        >
          <Button>Previous</Button>
          <NavLink to="/success">
            <Button
              variant="contained"
              color="primary"
              sx={{ textTransform: "none" }}
            >
              Purchase
            </Button>
          </NavLink>
        </Box>
      </Box>
    </Dialog>
  );
}
