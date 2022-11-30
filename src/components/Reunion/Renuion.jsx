import { Grid, Typography } from "@mui/material";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/animation/82488-team-members-meetup.json";

const Renuion = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Lottie options={defaultOptions} height={350} width={350} />
      </Grid>
      <Grid item py={3}>
        <Grid container flexDirection="column">
          <Grid container justifyContent="center">
            <Grid item>
              <Typography
                variant="h3"
                sx={{ fontWeight: "600", color: "orange" }}
              >
                Reunion 2023
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="h5" p={2}>
                The Reunion at OUTR will be next on 25th May, 2023. Alumni
                association invites everyone to attend the Reunion
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Renuion;
