import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const history = useNavigate();
  return (
    <Grid container p={3} pb={9} direction="column">
      <Grid item pb={1}>
        <Typography sx={{ color: "orange", fontWeight: "600" }} variant="h4">
          Job Openings
        </Typography>
      </Grid>
      <Grid container spacing={3} justifyContent="center">
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
            <Grid item p={2} textAlign="right" direction="row">
              <Button
                size="small"
                sx={{ color: "orange" }}
                onClick={() => history("/jobs")}
              >
                Learn More
              </Button>
            </Grid>
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
            <Grid item p={2} textAlign="right" direction="row">
              <Button
                size="small"
                sx={{ color: "orange" }}
                onClick={() => history("/jobs")}
              >
                Learn More
              </Button>
            </Grid>
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
            <Grid item p={2} textAlign="right" direction="row">
              <Button
                size="small"
                sx={{ color: "orange" }}
                onClick={() => history("/jobs")}
              >
                Learn More
              </Button>
            </Grid>
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
            <Grid item p={2} textAlign="right" direction="row">
              <Button
                size="small"
                sx={{ color: "orange" }}
                onClick={() => history("/jobs")}
              >
                Learn More
              </Button>
            </Grid>
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
            <Grid item p={2} textAlign="right" direction="row">
              <Button
                size="small"
                sx={{ color: "orange" }}
                onClick={() => history("/jobs")}
              >
                Learn More
              </Button>
            </Grid>
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
            <Grid item p={2} textAlign="right" direction="row">
              <Button
                size="small"
                sx={{ color: "orange" }}
                onClick={() => history("/jobs")}
              >
                Learn More
              </Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Jobs;
