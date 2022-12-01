import React from "react";
import { useNavigate } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import WrapperContainer from "../../common/WrapperContainer";
import { images } from "../../assets/collgeImages";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import { Grid, Typography } from "@mui/material";
import Facts from "../../components/Facts/Facts";
import Jobs from "../../components/Jobs/Jobs";
import Divider from "@mui/material/Divider";
import Newsletter from "../../components/Newsletter/Newsletter";
import Lottie from "react-lottie";
import "./Home.css";
import animationData from "../../assets/animation/55964-college-student-jumping.json";

const Home = () => {
  let history = useNavigate();
  const imagesGallery = [
    { url: images.college1 },
    { url: images.college2 },
    { url: images.college3 },
  ];
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <WrapperContainer>
      <Grid container xs={12}>
        <Grid
          item
          xs={12}
          height="100vh"
          className="hero-section"
          sx={{
            background:
              "linear-gradient(144deg, rgba(131,58,180,1) 0%, rgba(255,255,255,1) 0%, rgba(255,167,44,1) 100%)",
          }}
        >
          {/* <SimpleImageSlider
            width={"100vw"}
            height={"60vh"}
            images={imagesGallery}
            showBullets={true}
            showNavs={true}
          /> */}
          <Grid container direction="row" height="100%" alignItems="center">
            <Grid item xs={12} p={4} sm={12} md={12} lg={4} xl={6}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                height="100%"
              >
                <Grid item pb={3}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 600,
                      fontFamily: "Quicksand, sans-serif",
                    }}
                    textAlign="center"
                  >
                    AIKYAM
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      fontFamily: "Quicksand, sans-serif",
                    }}
                    textAlign="left"
                  >
                    Aikyam is a Sanskrit word which means Unity.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 400,
                      fontFamily: "Quicksand, sans-serif",
                    }}
                    textAlign="left"
                  >
                    Aikyam will be helpful in connection and registering the
                    data of the Alumni. We are providing a web-based solution
                    for retention of data of the Alumni so that we can track and
                    maintain alumni interaction among students who have
                    graduated from educational institutions across Odisha.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              p={4}
              pt={0}
              sm={12}
              md={12}
              lg={8}
              xl={6}
              width="40rem"
              height="40rem"
              className="animation"
            >
              <Lottie options={defaultOptions} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <UpcomingEvents />
        </Grid>
        <Grid item xs={12}>
          <Facts />
        </Grid>
        <Grid item xs={12}>
          <Jobs />
        </Grid>
      </Grid>
    </WrapperContainer>
  );
};

export default Home;
