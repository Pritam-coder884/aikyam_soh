import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const Newsletter = () => {
  return (
    <Grid
      container
      justifyContent="center"
      direction="row"
      sx={{ backgroundColor: "lightyellow" }}
      py={9}
    >
      <Grid container justifyContent="center">
        <Typography sx={{ color: "orange", fontWeight: "600" }} variant="h5">
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
              },
            }}
            id="outlined-name"
            label="Email"
          />
        </Grid>
        <Button variant="contained" sx={{ backgroundColor: "orange" }}>
          Subscribe
        </Button>
      </Grid>
    </Grid>
  );
};

export default Newsletter;
