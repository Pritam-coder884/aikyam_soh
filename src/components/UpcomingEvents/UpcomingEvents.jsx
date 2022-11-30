import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Countdown from "react-countdown";

const UpcomingEvents = () => {
  return (
    <Grid container>
      <Grid
        container
        direction="column"
        item
        sx={{ backgroundColor: "orange", padding: "4rem" }}
        xs={6}
      >
        <Typography sx={{ color: "white", fontWeight: "600" }}>
          <Divider textAlign="left" light="true">
            Events
          </Divider>
        </Typography>

        <Typography sx={{ color: "white" }} variant="h5">
          Webinar on Competitve Programming
        </Typography>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <EventAvailableIcon />
          </Grid>
          <Grid item>
            <Typography sx={{ color: "white" }}>25th December, 2022</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item>
            <Typography sx={{ color: "white" }} variant="h4">
              <Countdown date="2022-12-25T00:00:00" />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        sx={{ backgroundColor: "white", variant: "fullWidth", padding: "4rem" }}
        xs={6}
        direction="column"
      >
        <Grid item>
          <Divider textAlign="left">
            <Typography sx={{ fontWeight: "600" }}>Upcoming Events</Typography>
          </Divider>
        </Grid>
        <Grid item p={2}>
          <Grid item>
            <Typography variant="h5">Reunion 2023</Typography>
          </Grid>
          <Grid item>
            <Typography>
              OUTR Alumni meet at OUTR Bhubaneswar on 25th March 2023.
            </Typography>
          </Grid>
        </Grid>
        <Grid item p={2}>
          <Grid item>
            <Typography variant="h5">Xtasy 2023</Typography>
          </Grid>
          <Grid item>
            <Typography>OUTR Flagship Fest on 30th March 2023.</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UpcomingEvents;
