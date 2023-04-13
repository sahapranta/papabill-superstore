import {
  Card,
  Typography,
  Box,
  Button,
  IconButton,
  Grid,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import AppointmentCard from "./AppointmentCard";
import woman from "../../assets/woman.png";
import blank from "../../assets/blank.svg";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useState, useEffect } from "react";

import BookingModal from "./BookingModal";
import RescheduleModal from "./RescheduleModal";

export default function Appointment(props) {
  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const [bookingModal, setBookingModal] = useState(false);

  const openBookingModal = () => {
    setBookingModal(true);
  };

  const closeBookingModal = () => {
    setBookingModal(false);
  };

  const [openReschedule, setOpenReschedule] = useState(false);

  const onReschedule = () => {
    setOpenReschedule(true);
  };

  const closeReschedule = () => {
    setOpenReschedule(false);
  };
  const [historyOpen, setHistoryOpen] = useState(true);

  useEffect(() => {
    if (!notMobile) {
      setHistoryOpen(false);
    } else {
      setHistoryOpen(true);
    }
  }, [notMobile]);

  const openHistoryPanel = () => {
    setHistoryOpen(!historyOpen);
  };

  return (
    <Card
      sx={{
        backgroundColor: "#1e21ff",
        color: "#fff",
        borderRadius: "10px",
        p: 3,
        my: 3,
      }}
    >
      <BookingModal
        open={bookingModal}
        handleClose={closeBookingModal}
        reschedule={onReschedule}
      />
      <RescheduleModal open={openReschedule} handleClose={closeReschedule} />
      <Typography variant="h5" sx={{ mb: 2 }}>
        Hi, Jonhhy
      </Typography>
      <Grid container spacing={{ xs: 1, sm: 3 }}>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="h6">Your appointment</Typography>
            <AppointmentCard
              title="Japanese lessons"
              image={woman}
              status="paid"
              openModal={openBookingModal}
            />
            <AppointmentCard
              title="English lessons st..."
              image={blank}
              status="unpaid"
              openModal={openBookingModal}
            />
            {notMobile ? (
              <AppointmentCard
                title="Japanese lessons"
                image={woman}
                status="paid"
                openModal={openBookingModal}
              />
            ) : null}
          </Box>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6">History</Typography>
              <IconButton sx={{ color: "#fff" }} onClick={openHistoryPanel}>
                {historyOpen ? (
                  <KeyboardArrowUpOutlinedIcon />
                ) : (
                  <KeyboardArrowDownOutlinedIcon />
                )}
              </IconButton>
            </Box>
            {historyOpen ? (
              <>
                <AppointmentCard
                  title="Japanese lessons"
                  image={woman}
                  status="paid"
                />
                <AppointmentCard
                  title="English lessons st..."
                  image={blank}
                  status="unpaid"
                />
                <AppointmentCard
                  title="Japanese lessons"
                  image={woman}
                  status="paid"
                />
              </>
            ) : null}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Active plans</Typography>
          <Card
            sx={{
              borderRadius: "15px",
              p: 2,
              my: 2,
              height: notMobile ? "120px" : "auto",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{
                justifyContent: "space-between",
                alignItems: notMobile ? "center" : "start",
              }}
            >
              <Stack spacing={{ xs: 1, sm: 2 }}>
                <Typography variant="h6">235 purchase for lessons</Typography>
                <Typography variant="caption" sx={{ color: "#718096" }}>
                  Unlimited · 3 months
                </Typography>
              </Stack>

              <Stack spacing={{ xs: 1, sm: 2 }}>
                <Typography variant="h6">Rp 250.000</Typography>
                <Box>
                  <Button
                    variant="contained"
                    color="inherit"
                    size="small"
                    sx={{
                      backgroundColor: "#EEEEEE",
                      p: "1px 2px",
                      fontSize: "0.5rem",
                      textTransform: "none",
                    }}
                  >
                    Recurring
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
}
