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

const CardAlum = ({
  name,
  email,
  pic,
  gender,
  mobile,
  institution,
  pbatch,
  branch,
  job,
  location,
}) => {
  return (
    <Grid conatiner xs={10} display="ms-grid" sx={{ margin: "25px auto" }}>
      <Card sx={{ maxWidth: 345 }} className="container">
        <CardMedia
          component="img"
          height="140"
          image={pic}
          alt=""
          className="img"
        />
        <Box className="overlay">
          <CardContent className="text" sx={{ width: "80%" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ letterSpacing: "1px" }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white", letterSpacing: "1px" }}
            >
              {email}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white", letterSpacing: "1px" }}
            >
              {gender}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white", letterSpacing: "1px" }}
            >
              {mobile}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white", letterSpacing: "1px" }}
            >
              {institution}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white", letterSpacing: "1px" }}
            >
              Pass out: {pbatch}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white", letterSpacing: "1px" }}
            >
              Branch: {branch}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white", letterSpacing: "1px" }}
            >
              Current Job: {job}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white", letterSpacing: "1px" }}
            >
              Location: {location}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default CardAlum;
