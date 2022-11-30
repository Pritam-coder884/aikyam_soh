import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

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
            10,000+
          </Typography>
          <Typography color="white">Alumni</Typography>
        </Grid>
        <Grid item>
          <Typography color="orange" variant="h3">
            1000+
          </Typography>
          <Typography color="white">Alumni outside India</Typography>
        </Grid>
        <Grid item>
          <Typography color="orange" variant="h3">
            5000+
          </Typography>
          <Typography color="white">Attendance at Renuinons</Typography>
        </Grid>
        <Grid item>
          <Typography color="orange" variant="h3">
            50+
          </Typography>
          <Typography color="white"> CEOs at MNCs</Typography>
        </Grid>
        <Grid item>
          <Typography color="orange" variant="h3">
            20+
          </Typography>
          <Typography color="white">CEOs at PCUs</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Facts;
