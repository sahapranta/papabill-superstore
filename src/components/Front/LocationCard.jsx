import { Card, Box, Typography, CardMedia } from "@mui/material";
import Map from "../../assets/map.png";

export default function LocationCard(props) {
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: "10px",
        mb: 5,
        display: "flex",
        flexDirection: props.notMobile ? "row" : "column",
      }}
    >
      <Box sx={{ py: 2 }}>
        <Typography variant="h5">Address</Typography>
        <Typography variant="body" sx={{ color: "#718096", my: 2 }}>
          M7J4+VR8, Unnamed Road, Alangga, Kec. Andoolo, Kabupaten Konawe
          Selatan, Sulawesi Tenggara 93811, Indonesia
        </Typography>
      </Box>
      <CardMedia
        width={100}
        sx={{ height: "160px", objectFit: "fill" }}
        component="img"
        image={Map}
        alt="PapaBill Super Store"
      />
    </Card>
  );
}
