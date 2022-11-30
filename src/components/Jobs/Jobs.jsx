import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Jobs = () => {
  return (
    <Grid container p={3} direction="column">
      <Grid item pb={1}>
        <Typography sx={{ color: "orange", fontWeight: "600" }} variant="h4">
          Job Openings
        </Typography>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Software Devlepment Intern
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Expected Salary : 8 LPA
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                UI/UX Intern
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Expected Salary : 6LPA
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Marketing Intern
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Expected Salary : 4LPA
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Flutter Developer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Expected Salary : 7LPA
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Frontent Engineer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Expected Salary : 7LPA
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Backend Developer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Expected Salary : 10LPA
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Jobs;
