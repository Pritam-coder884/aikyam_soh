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
        <Grid item xs={12} height="100vh">
          {/* <SimpleImageSlider
            width={"100vw"}
            height={"60vh"}
            images={imagesGallery}
            showBullets={true}
            showNavs={true}
          /> */}
          <Grid container direction="row" height="100vh">
            <Grid item xs={12} p={4} sm={12} lg={6} md={6} xl={6}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <Grid item>
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
                      fontWeight: 400,
                      fontFamily: "Quicksand, sans-serif",
                    }}
                    textAlign="center"
                  >
                    Aikyam is a Sanskrit word which means Unity.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              p={4}
              sm={12}
              lg={6}
              md={6}
              xl={6}
              width="41rem"
              height="41rem"
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
        <Grid item xs={12}>
          <Divider />
          <Newsletter />
        </Grid>
      </Grid>
    </WrapperContainer>
  );
};

export default Home;
