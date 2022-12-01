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
        xs={12}
        md={4}
        lg={4}
        xl={4}
        sm={6}
      >
        <Typography
          sx={{ fontWeight: "600", color: "white" }}
          textAlign="center"
        >
          <Divider textAlign="center">Events</Divider>
        </Typography>

        <Typography sx={{ color: "white" }} variant="h5" textAlign="center">
          Webinar on Competitve Programming
        </Typography>
        <Grid container direction="row" spacing={2} justifyContent="center">
          <Grid item>
            <EventAvailableIcon sx={{ color: "white" }} />
          </Grid>
          <Grid item>
            <Typography sx={{ color: "white" }} textAlign="center">
              25th December, 2022
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item>
            <Typography sx={{ color: "white" }} variant="h4" textAlign="center">
              <Countdown date="2022-12-25T00:00:00" />
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        item
        sx={{
          backgroundColor: "white",
          variant: "fullWidth",
          padding: "4rem",
        }}
        xs={12}
        md={8}
        lg={8}
        xl={8}
        sm={6}
        direction="column"
      >
        <Grid item>
          <Typography
            sx={{ fontWeight: "600", color: "black" }}
            textAlign="center"
          >
            <Divider textAlign="center">Upcoming Events</Divider>
          </Typography>
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
