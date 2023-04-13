import { Card, Box, Typography, Chip, Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function BookingCard(props) {
  const navigate = useNavigate();
  const goToLesson = () => {
    navigate("/lesson");
  };

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: "10px",
        display: "flex",
        mb: 2,
        justifyContent: "space-between",
        flexDirection: props.notMobile ? "row" : "column",
      }}
    >
      <Box sx={{ mb: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#718096", my: 1 }}>
          {props.body}
        </Typography>
        <Typography variant="caption" sx={{ color: "#718096", my: 2 }}>
          {props.time}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "space-between",
          flexWrap: "nowrap",
          flexDirection: props.notMobile ? "column" : "row",
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontWeight: 600, mb: 1 }}>{props.price}</Typography>
          <Chip
            label="Appointment"
            sx={{ borderRadius: "none" }}
            size="small"
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none" }}
          onClick={goToLesson}
        >
          Book now
        </Button>
      </Box>
    </Card>
  );
}
