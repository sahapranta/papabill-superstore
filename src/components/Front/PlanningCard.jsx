import { Box, Button, Card, Typography } from "@mui/material";

export default function PlanningCard(props) {
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: "10px",
        mr: 2,
        width: "370px",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 400 }}>
        235 purchase
      </Typography>
      <Typography variant="body2" sx={{ color: "#718096", my: 1 }}>
        With digital payments your customers will be able to pay for your
        services and plans in an early, reducing delays, defaults, absences and
        reschedules
      </Typography>
      <Typography variant="caption" sx={{ color: "#718096", my: 2 }}>
        Unlimited · 3 months{" "}
        <Typography
          variant="caption"
          component="small"
          sx={{
            backgroundColor: "#EDF2F7",
            fontSize: "0.5rem",
            fontWeight: 500,
            p: "2px 5px",
            color: "#000",
          }}
        >
          Recurring
        </Typography>
      </Typography>
      <Box>
        <Typography component="span" variant="h6" sx={{ fontWeight: 500 }}>
          Rp 350.00 /
        </Typography>{" "}
        <Typography component="small" sx={{ color: "#718096" }}>
          6 months
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="inherit"
        sx={{
          textTransform: "none",
          mt: 2,
          backgroundColor: "primary.light",
          fontWeight: 600,
          py: 2,
          fontSize: "1rem",
        }}
        fullWidth
      >
        Purchase
      </Button>
    </Card>
  );
}
