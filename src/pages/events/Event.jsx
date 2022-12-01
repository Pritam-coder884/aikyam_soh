import React from "react";
import "./Event.css";
import HeaderWrapper from "../../common/Header";
import Footer from "../../components/Footer/Footer";
import ReactCard from "../../components/ReactCard/ReactCard";
import { Divider, Grid, Typography } from "@mui/material";
import WrapperContainer from "../../common/WrapperContainer";

const Event = () => {
  return (
    <WrapperContainer>
      <div className="events-container">
        <div className="events-heading">
          <h1>Events</h1>
          <p>
            View upcoming and previous alumni events & conferences from
            OUTR,BBSR
          </p>
          <hr style={{ marginTop: "2rem" }} />
        </div>
        {/* <div className="upcoming-events">
          <Grid
            container
            item
            sx={{ backgroundColor: "white", variant: "fullWidth", padding: "4rem" }}
            xs={6}
            direction="column"
          >
            <Grid item>
              <Divider textAlign="center">
                <Typography sx={{ fontWeight: "600", color: "black" }}>
                  Upcoming Events
                </Typography>
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
        </div> */}
        <div className="events-category">
          <div>
            <h2>Events of Zairza</h2>
          </div>
          <div className="add-events">
            <button>ADD EVENT</button>
          </div>
        </div>
        <div className="events-box">
          <ReactCard type="card1" />
          <ReactCard type="card2" />
          <ReactCard type="card3" />
        </div>
        <div className="events-category">
          <h2>Events of Spectrum</h2>
        </div>
        <div className="events-box">
          <ReactCard type="card4" />
          <ReactCard type="card5" />
          <ReactCard type="card6" />
        </div>
        <div className="events-category">
          <h2>Events of Aerospace</h2>
        </div>
        <div className="events-box">
          <ReactCard type="card7" />
          <ReactCard type="card8" />
          <ReactCard type="card9" />
        </div>
      </div>
      <Footer />
    </WrapperContainer>
  );
};

export default Event;
