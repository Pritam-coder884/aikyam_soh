import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const Newsletter = () => {
  return (
    <Grid container p={3} justifyContent="center">
      <Grid container justifyContent="center">
        <Typography sx={{ color: "orange", fontWeight: "600" }} variant="h5">
          Subscribe To Get Weekly Newsletter From Alumni
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <TextField
          sx={{ width: "350px" }}
          inputProps={{
            style: {
              height: "20px",
            },
          }}
          id="outlined-name"
          label="Email"
        />
        <Button>Subscribe</Button>
      </Grid>
    </Grid>
  );
};

export default Newsletter;
