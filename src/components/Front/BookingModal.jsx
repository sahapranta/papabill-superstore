import {
  Dialog,
  DialogTitle,
  IconButton,
  Box,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import AppointmentCard from "./AppointmentCard";
import blank from "../../assets/blank.svg";
import { useState } from "react";
import Cancellation from "./Cancellation";

export default function BookingModal(props) {
  const { open, handleClose, reschedule } = props;

  const [cancelAppointment, setCancelAppointment] = useState(false);
  const [canceled, setCanceled] = useState(false);

  const onModalClose = () => {
    setCancelAppointment(false);
    setCanceled(false);
    handleClose();
  };
  const cancel = () => {
    setCancelAppointment(true);
  };

  const onReschedule = () => {
    reschedule();
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
          {canceled
            ? "Cancellation, Rescheduling and Delays Policy"
            : "Service information"}
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
      {canceled ? (
        <Cancellation />
      ) : (
        <Box sx={{ width: "100%" }}>
          <AppointmentCard
            title="English lessons st..."
            image={blank}
            status="unpaid"
          />
          {cancelAppointment ? (
            <Box>
              <Typography variant="h6" sx={{ textAlign: "center", my: 2 }}>
                Do you really want to cancel this appointment?
              </Typography>
              <Stack direction="row" spacing={3} sx={{ mx: 3, mb: 3 }}>
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "primary.light",
                  }}
                  fullWidth
                  onClick={() => setCancelAppointment(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{
                    backgroundColor: "#E53E3E",
                    color: "#FFF",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#E53E3E",
                      color: "#FFF",
                    },
                  }}
                  fullWidth
                  onClick={() => setCanceled(true)}
                >
                  Yes, cancel appointment
                </Button>
              </Stack>
            </Box>
          ) : (
            <Stack direction="row" spacing={3} sx={{ mx: 3, mb: 3 }}>
              <Button
                variant="contained"
                color="inherit"
                sx={{
                  textTransform: "none",
                  backgroundColor: "primary.light",
                }}
                fullWidth
                onClick={onReschedule}
              >
                Reschedule
              </Button>
              <Button
                variant="contained"
                color="inherit"
                sx={{
                  color: "#E53E3E",
                  textTransform: "none",
                  backgroundColor: "primary.light",
                }}
                fullWidth
                onClick={cancel}
              >
                Cancel appointment
              </Button>
            </Stack>
          )}
        </Box>
      )}
    </Dialog>
  );
}
