import React from "react";
import {
  Dialog,
  DialogTitle,
  IconButton,
  Box,
  Button,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AppointmentCard from "./AppointmentCard";
import blank from "../../assets/blank.svg";

import Calender from "../Calender";

export default function RescheduleModal(props) {
  const { open, handleClose } = props;

  const onModalClose = () => {
    handleClose();
  };

  return (
    <Dialog
      maxWidth="sm"
      sx={{ borderRadius: "10px" }}
      onClose={onModalClose}
      open={open}
    >
      <Box sx={{ backgroundColor: "#262626", color: "#fff" }}>
        <DialogTitle>
          Reschedule an appointment
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
      <Box sx={{ p: 2 }}>
        <Typography variant="h5">Selected service</Typography>
        <AppointmentCard
          title="English lessons st..."
          image={blank}
          status="paid"
        />
        <Calender />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button>Previous</Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
          >
            Reschedule
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
