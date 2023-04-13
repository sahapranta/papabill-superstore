import {
  Card,
  Box,
  CardMedia,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  CardActionArea,
} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

export default function AppointmentCard(props) {
  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Card sx={{ borderRadius: "15px", my: 2 }} variant="outlined">
      <CardActionArea
        disabled={!props.openModal}
        onClick={props.openModal}
        sx={{ display: "flex", p: 2 }}
      >
        <Box
          sx={{
            mr: 2,
            display: "flex",
            alignItems: "center",
            width: notMobile ? "60px" : "120px",
          }}
        >
          <CardMedia
            component="img"
            image={props.image}
            alt="Appointment"
            sx={{ borderRadius: "15px" }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {props.title}
              </Typography>
              <Typography variant="body" sx={{ color: "#718096", my: 1 }}>
                <CalendarTodayOutlinedIcon fontSize="inherit" sx={{ mr: 1 }} />
                Nov 7, 2020 · 11:30
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Rp 3500.00
              </Typography>

              <Box sx={{ mt: 1 }}>
                <Button
                  component="div"
                  variant="contained"
                  color="inherit"
                  size="small"
                  sx={{
                    backgroundColor: "#EEEEEE",
                    mr: 2,
                    p: "2px 4px",
                    textTransform: "none",
                  }}
                >
                  Appointment
                </Button>
                {props.status === "paid" ? (
                  <Button
                    component="div"
                    variant="contained"
                    color="inherit"
                    size="small"
                    sx={{
                      backgroundColor: "#51BC6D",
                      color: "#fff",
                      p: "2px 4px",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "#36DD61",
                        color: "#fff",
                      },
                    }}
                  >
                    {props.status}
                  </Button>
                ) : (
                  <Button
                    component="div"
                    variant="contained"
                    color="danger"
                    size="small"
                    sx={{
                      p: "2px 4px",
                      color: "#fff",
                      textTransform: "capitalize",
                      "&:hover": {
                        color: "#fff",
                      },
                    }}
                  >
                    {props.status}
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardActionArea>
    </Card>
  );
}
