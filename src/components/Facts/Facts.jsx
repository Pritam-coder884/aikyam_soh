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
      sx={{ backgroundColor: "black", height: "30vh" }}
    >
      <Typography variant="h4" color="white" sx={{ fontWeight: "600" }} pt={1}>
        Stats
      </Typography>
      <Grid container direction="row" justifyContent="space-around">
        <Grid item>
          <Typography color="orange" variant="h3">
            <CountUp end={8000} enableScrollSpy={true} suffix={"+"} />
          </Typography>
          <Typography color="white">Alumni</Typography>
        </Grid>
        <Grid item>
          <Typography color="orange" variant="h3">
            <CountUp end={1000} enableScrollSpy={true} suffix={"+"} />
          </Typography>
          <Typography color="white">Alumni outside India</Typography>
        </Grid>
        <Grid item>
          <Typography color="orange" variant="h3">
            <CountUp end={5000} enableScrollSpy={true} suffix={"+"} />
          </Typography>
          <Typography color="white">Attendance at Renuinons</Typography>
        </Grid>
        <Grid item>
          <Typography color="orange" variant="h3">
            <CountUp end={50} enableScrollSpy={true} suffix={"+"} />
          </Typography>
          <Typography color="white"> CEOs at MNCs</Typography>
        </Grid>
        <Grid item>
          <Typography color="orange" variant="h3">
            <CountUp end={20} enableScrollSpy={true} suffix={"+"} />
          </Typography>
          <Typography color="white">CEOs at PCUs</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Facts;
