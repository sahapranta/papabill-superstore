import React from "react";
import { Box, Button, TextField, Typography, Card, Grid } from "@mui/material";
import MainLayout from "../components/MainLayout";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
export default function PaymentSuccess() {
  return (
    <MainLayout>
      <Box sx={{ textAlign: "center", my: 4, mx: "auto", maxWidth: "680px" }}>
        <CheckCircleOutlineIcon sx={{ fontSize: "4rem", color: "#718096" }} />
        <Typography
          variant="h5"
          sx={{ color: "#262626", fontWeight: 600, mb: 3 }}
        >
          Thank you to making an appointment!
        </Typography>
        <Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { mb: 2 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              variant="standard"
              fullWidth
              label="Service"
              defaultValue="Japanese lessons"
            />
            <TextField
              variant="standard"
              fullWidth
              label="Date and time"
              defaultValue="Dec 2, 2020 · 11:00"
            />
            <TextField
              variant="standard"
              fullWidth
              label="Duration"
              defaultValue="1h"
            />
            <TextField
              variant="standard"
              fullWidth
              label="Location"
              defaultValue="Client`s place"
            />
            <TextField
              variant="standard"
              fullWidth
              label="Price"
              defaultValue="Rp 1.350.000"
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ textTransform: "none", my: 2 }}
          fullWidth
        >
          Make another appointment
        </Button>
        <Card
          sx={{
            borderRadius: "15px",
            backgroundColor: "#262626",
            p: 2,
            mt: 3,
            textAlign: "left",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <Box sx={{ color: "#fff", mr: 3 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Would you like your clients to book in this way?
                </Typography>
                <Typography variant="body2">
                  With our app take control of your business
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Button
                variant="contained"
                color="inherit"
                size="large"
                sx={{
                  textTransform: "none",
                  color: "#262626",
                }}
                fullWidth
              >
                Try it now for free!
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </MainLayout>
  );
}
