import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const Newsletter = () => {
  return (
    <Grid
      container
      justifyContent="center"
      direction="row"
      sx={{ backgroundColor: "orange" }}
      py={9}
    >
      <Grid container justifyContent="center">
        <Typography sx={{ color: "white", fontWeight: "600" }} variant="h5">
          Subscribe To Get Weekly Newsletter From Alumni
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item px={1}>
          <TextField
            sx={{ width: "500px" }}
            inputProps={{
              style: {
                height: "20px",
                backgroundColor: "white",
                borderRadius: "1rem",
                border: "none !important",
              },
            }}
            label="Enter Your Email"
          />
        </Grid>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "orange",
            borderRadius: "1rem",
          }}
        >
          Subscribe
        </Button>
      </Grid>
    </Grid>
  );
};

export default Newsletter;
