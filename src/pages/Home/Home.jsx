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
      <Grid container>
        <Grid item>
          {/* <SimpleImageSlider
            width={"100vw"}
            height={"60vh"}
            images={imagesGallery}
            showBullets={true}
            showNavs={true}
          /> */}
          <Grid container direction="row">
            <Grid
              container
              xs={6}
              p={4}
              // alignItems="center"
              // justifyContent="center"
            >
              <Typography variant="h4">AIKYAM</Typography>

              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci mollitia quis laboriosam in eius necessitatibus
                perferendis eaque explicabo fugit atque?
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Lottie options={defaultOptions} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
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
