import { useState } from "react";
import MainLayout from "../components/MainLayout";
import {
  Card,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import LocationCard from "../components/Front/LocationCard";
import { useNavigate } from "react-router";
import PaymentModal from "../components/Front/PaymentModal";

export default function Lesson() {
  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();

  const [purchaseModal, setPurchaseModal] = useState(false);

  const openPurchaseModal = () => {
    setPurchaseModal(true);
  };

  const closePurchaseModal = () => {
    setPurchaseModal(false);
  };

  const images = [
    "https://i.ibb.co/XxMrLt9/woman.jpg",
    "https://i.ibb.co/XxMrLt9/woman.jpg",
    "https://i.ibb.co/XxMrLt9/woman.jpg",
  ];
  return (
    <MainLayout>
      <Typography
        component="div"
        variant="h4"
        sx={{ display: "flex", alignItems: "center", my: 3 }}
      >
        <IconButton onClick={() => navigate("/")}>
          <KeyboardArrowLeftOutlinedIcon fontSize="inherit" />
        </IconButton>
        Japanese lessons
      </Typography>
      <Slide>
        {images.map((image, i) => (
          <div
            key={`image-${i}`}
            style={{
              backgroundSize: notMobile ? "cover" : "contain",
              backgroundRepeat: "no-repeat",
              height: notMobile ? "350px" : "150px",
              backgroundImage: `url(${image})`,
            }}
          ></div>
        ))}
      </Slide>
      <Card variant="outlined" sx={{ borderRadius: "10px", p: 2, my: 3 }}>
        <Typography variant="h5">About</Typography>
        <Typography variant="body" sx={{ color: "#718096" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </Typography>
      </Card>
      <Card variant="outlined" sx={{ borderRadius: "10px", p: 2, my: 3 }}>
        <Typography variant="h5">Service duration</Typography>
        <Typography variant="body" sx={{ color: "#718096" }}>
          1h 30min
        </Typography>
      </Card>
      <LocationCard notMobile={notMobile} />
      <Box
        sx={{
          display: "flex",
          flexDirection: notMobile ? "row" : "column",
          justifyContent: notMobile ? "end" : "start",
        }}
      >
        <Typography variant="h5">Rp 350.000</Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            textTransform: "none",
            margin: notMobile ? "0px 20px" : "20px 0px 0px 0px",
          }}
          onClick={openPurchaseModal}
        >
          Book now
        </Button>
      </Box>
      <PaymentModal open={purchaseModal} handleClose={closePurchaseModal} />
    </MainLayout>
  );
}
