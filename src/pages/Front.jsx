import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import BookingCard from "../components/Front/BookingCard";
import PlanningCard from "../components/Front/PlanningCard";
import { useEffect, useState } from "react";
import Hero from "../components/Front/Hero";
import LocationCard from "../components/Front/LocationCard";
import Appointment from "../components/Front/Appointment";
import MainLayout from "../components/MainLayout";
import { useSelector } from "react-redux";
// rest of the code
export default function Front() {
  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


  const bookings = [
    {
      title: "Japanese lessons",
      description:
        "With digital payments your customers will be able to pay for your services and plans in an early, reducing delays",
      time: "1h 30min",
      price: "Rp 1.350.00",
    },
    {
      title: "English lessons with students",
      description:
        "With digital payments your customers will be able to pay for your services and plans in an early, reducing delays",
      time: "1h 30min",
      price: "Rp 1.350.00",
    },
    {
      title: "Japanese lessons",
      description:
        "With digital payments your customers will be able to pay for your services and plans in an early, reducing delays",
      time: "1h 30min",
      price: "Rp 1.350.00",
    },
  ];

  return (
    <MainLayout >
      <Hero notMobile={notMobile} />

      {isLoggedIn ? <Appointment /> : null}

      <Typography variant="h4" sx={{ fontWeight: 700, my: 3 }}>
        Appointment booking
      </Typography>
      {bookings.map((booking, i) => (
        <BookingCard
          title={booking.title}
          body={booking.description}
          time={booking.time}
          price={booking.price}
          notMobile={notMobile}
          key={`${booking.title}-${i}`}
        />
      ))}

      <Typography variant="h4" sx={{ fontWeight: 700, my: 3 }}>
        Plans
      </Typography>
      <Box sx={{ overflowX: "auto" }}>
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "start",
            flexWrap: "nowrap",
          }}
        >
          <PlanningCard />
          <PlanningCard />
          <PlanningCard />
        </Box>
      </Box>
      <Typography variant="h4" sx={{ fontWeight: 700, my: 3 }}>
        Location
      </Typography>
      <LocationCard notMobile={notMobile} />
    </MainLayout>
  );
}
