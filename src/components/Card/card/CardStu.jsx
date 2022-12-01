import React from "react";
import {
  Card,
  Box,
  Grid,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import "./Card.css";

const CardStu = () => {
  return (
    <Box
      p={10}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        margin: "auto",
      }}
    >
      <Grid conatiner xs={10} display="ms-grid">
        <Card sx={{ maxWidth: 345, margin: "0 auto" }} className="container">
          <CardMedia
            component="img"
            height="140"
            image="data:image/png;base64,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"
            alt=""
            className="img"
          />
          <Box className="overlay">
            <CardContent className="text" sx={{ width: "80%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Name
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Male
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                email@gmail.com
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                (+919876543210)
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                XYZ,BBSR
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                BTech
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Branch:-Cse
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                RegdNo:-9876543210
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      {/* <Grid conatiner xs={10} display="ms-grid">
        <Card sx={{ maxWidth: 345, margin: "0 auto" }} className="container">
          <CardMedia
            component="img"
            height="140"
            image="data:image/png;base64,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"
            alt=""
            className="img"
          />
          <Box className="overlay">
            <CardContent className="text">
              <Typography gutterBottom variant="h5" component="div">
                Name
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text1"
                sx={{ color: "white" }}
              >
                Male
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text1"
                sx={{ color: "white" }}
              >
                email@gmail.com
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text1"
                sx={{ color: "white" }}
              >
                (+919876543210)
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text1"
                sx={{ color: "white" }}
              >
                XYZ,BBSR
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text1"
                sx={{ color: "white" }}
              >
                BTech
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text1"
                sx={{ color: "white" }}
              >
                Branch:-Cse
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text1"
                sx={{ color: "white" }}
              >
                RegdNo:-9876543210
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>

      <Grid conatiner xs={10} display="ms-grid">
        <Card sx={{ maxWidth: 345, margin: "0 auto" }} className="container">
          <CardMedia
            component="img"
            height="140"
            image="data:image/png;base64,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"
            alt=""
            className="img"
          />
          <Box className="overlay">
            <CardContent className="text">
              <Typography gutterBottom variant="h5" component="div">
                Name
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Male
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                email@gmail.com
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                (+919876543210)
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                XYZ,BBSR
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                BTech
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Branch:-Cse
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                RegdNo:-9876543210
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid> */}
    </Box>
  );
};

export default CardStu;
