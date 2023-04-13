import { Box, Card, Typography } from "@mui/material";
import React from "react";

export default function Cancellation() {
  return (
    <Box sx={{ px: 2 }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        We are almost there
      </Typography>
      <Typography variant="body" sx={{ color: "#718096" }}>
        By booking with PapBill Super Store you are accepting the following
        Cancellation Policy:
      </Typography>
      <Typography component="div" variant="body" sx={{ color: "#718096" }}>
        <ul>
          <li>
            A booking will be considered made if there is a delay of more than
            30 minutes or a cancellation with less than 2 hours of advance
          </li>
          <li>
            Cancellation or rescheduling made more than 2 hours will be
            refundable, to be arranged the format
          </li>
        </ul>
      </Typography>
      <Card
        sx={{ p: 3, backgroundColor: "#F7FAFC", borderColor: "#D3DEE9", my: 3 }}
      >
        <Typography variant="body2" sx={{ color: "#718096" }}>
          Appointments made are subject to charge and not refundable. This
          Policy serves to ensure that all customers manage to book their
          appointments with adequate time and our time is respected, as it is
          normally not possible to fit another client in a short period of time
        </Typography>
      </Card>
    </Box>
  );
}
