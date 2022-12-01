import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CountUp from "react-countup";

const Facts = () => {
  return (
    <Grid
      container
      p={3}
      xs={12}
      sx={{
        backgroundColor: "black",
        height: "30vh",
      }}
    >
      <Typography
        variant="h4"
        color="white"
        sx={{ fontWeight: "600" }}
        pt={1}
        textAlign="center"
      >
        Stats
      </Typography>
      <Grid container direction="row" justifyContent="space-around">
        <Grid item>
          <Typography
            color="orange"
            variant="h3"
            sx={{
              "@media (max-width:900px)": {
                fontSize: "1.5rem",
              },
            }}
            textAlign="center"
          >
            <CountUp end={8000} enableScrollSpy={true} suffix={"+"} />
          </Typography>
          <Typography
            color="white"
            sx={{
              "@media (max-width:900px)": {
                fontSize: "0.8rem",
              },
            }}
            textAlign="center"
          >
            Alumni
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            color="orange"
            variant="h3"
            sx={{
              "@media (max-width:900px)": {
                fontSize: "1.5rem",
              },
            }}
            textAlign="center"
          >
            <CountUp end={1000} enableScrollSpy={true} suffix={"+"} />
          </Typography>
          <Typography
            color="white"
            sx={{
              "@media (max-width:900px)": {
                fontSize: "0.8rem",
              },
            }}
            textAlign="center"
          >
            Alumni outside India
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            textAlign="center"
            color="orange"
            variant="h3"
            sx={{
              "@media (max-width:900px)": {
                fontSize: "1.5rem",
              },
            }}
          >
            <CountUp end={5000} enableScrollSpy={true} suffix={"+"} />
          </Typography>
          <Typography
            textAlign="center"
            color="white"
            sx={{
              "@media (max-width:900px)": {
                fontSize: "0.8rem",
              },
            }}
          >
            Attendance at Renuinons
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            textAlign="center"
            color="orange"
            variant="h3"
            sx={{
              "@media (max-width:900px)": {
                fontSize: "1.5rem",
              },
            }}
          >
            <CountUp end={50} enableScrollSpy={true} suffix={"+"} />
          </Typography>
          <Typography
            textAlign="center"
            color="white"
            sx={{
              "@media (max-width:900px)": {
                fontSize: "0.8rem",
              },
            }}
          >
            {" "}
            CEOs at MNCs
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            textAlign="center"
            color="orange"
            variant="h3"
            sx={{
              "@media (max-width:900px)": {
                fontSize: "1.5rem",
              },
            }}
          >
            <CountUp end={20} enableScrollSpy={true} suffix={"+"} />
          </Typography>
          <Typography
            textAlign="center"
            color="white"
            sx={{
              "@media (max-width:900px)": {
                fontSize: "0.8rem",
              },
            }}
          >
            CEOs at PCUs
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Facts;
