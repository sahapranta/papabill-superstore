import { Card, Box, Typography } from "@mui/material";
import { Map, Marker, ZoomControl } from "pigeon-maps";
// import Map from "../../assets/map.png";

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
        <Typography variant="h5" sx={{ mb: 2 }}>
          Address
        </Typography>
        <Typography variant="body" sx={{ color: "#718096" }}>
          M7J4+VR8, Unnamed Road, Alangga, Kec. Andoolo, Kabupaten Konawe
          Selatan, Sulawesi Tenggara 93811, Indonesia
        </Typography>
      </Box>
      {/* <CardMedia
        width={100}
        sx={{ height: "160px", objectFit: "fill" }}
        component="img"
        image={Map}
        alt="PapaBill Super Store"
      /> */}
      <Box sx={{ width: "100%" }}>
        <Map height={160} defaultCenter={[-4.34417, 122.3132]} defaultZoom={12}>
          <Marker width={50} anchor={[-4.34417, 122.3132]} />
          <ZoomControl />
        </Map>
      </Box>
    </Card>
  );
}
