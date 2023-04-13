import { Card, Box, CardMedia, Typography } from "@mui/material";

export default function Hero(props) {
  return (
    <Card
      sx={{
        my: 3,
        p: 4,
        display: "flex",
        borderRadius: "10px",
        flexDirection: props.notMobile ? "row" : "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <CardMedia
          component="img"
          sx={{
            width: 90,
            height: 90,
            float: "left",
            mr: 3,
            borderRadius: "10px",
          }}
          image="https://mui.com/static/images/cards/live-from-space.jpg"
          alt="PapaBill Super Store"
        />

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mt: props.notMobile ? 1 : 2,
            mb: props.notMobile ? 0 : 4,
          }}
        >
          PapaBill Super Store
        </Typography>
        <Typography
          variant="body"
          component="div"
          sx={{
            fontWeight: 500,
            color: "#718096",
            my: props.notMobile ? 1 : 2,
          }}
        >
          With digital payments your customers will be able to pay for your
          services and plans in an early, reducing delays
        </Typography>
      </Box>
      <svg
        width="50"
        height="50"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.0095 2H39.9905C19.0383 2 2.00005 19.043 2.00005 40C1.98704 48.0037 4.52063 55.8041 9.23429 62.2727L4.49855 76.3897L19.1048 71.7204C25.3005 75.8309 32.5742 78.0158 40.0095 77.9999C60.9617 77.9999 78 60.9522 78 40C78 19.0477 60.9617 2 40.0095 2Z"
          fill="#4CAF50"
        />
        <path
          d="M62.1206 55.6608C61.2038 58.2496 57.5653 60.3966 54.6631 61.0236C52.6776 61.4463 50.0841 61.7836 41.3536 58.1641C30.1864 53.5376 22.9949 42.1898 22.4344 41.4536C21.8976 40.7173 17.9219 35.4449 17.9219 29.9919C17.9219 24.5389 20.6911 21.8836 21.8074 20.7436C22.7241 19.8079 24.2394 19.3804 25.6929 19.3804C26.1631 19.3804 26.5859 19.4041 26.9659 19.4231C28.0821 19.4706 28.6426 19.5371 29.3789 21.2994C30.2956 23.5081 32.5281 28.9611 32.7941 29.5216C33.0649 30.0821 33.3356 30.8421 32.9556 31.5784C32.5994 32.3384 32.2859 32.6756 31.7254 33.3216C31.1649 33.9676 30.6329 34.4616 30.0724 35.1551C29.5594 35.7584 28.9799 36.4044 29.6259 37.5206C30.2719 38.6131 32.5044 42.2563 35.7914 45.1823C40.0331 48.9586 43.4721 50.1651 44.7023 50.6781C45.6191 51.0581 46.7116 50.9678 47.3813 50.2553C48.2316 49.3386 49.2813 47.8186 50.3501 46.3223C51.1101 45.2488 52.0696 45.1158 53.0766 45.4958C54.1026 45.8521 59.5318 48.5358 60.6481 49.0916C61.7643 49.6521 62.5006 49.9181 62.7713 50.3883C63.0373 50.8586 63.0373 53.0673 62.1206 55.6608Z"
          fill="#FAFAFA"
        />
      </svg>
    </Card>
  );
}
