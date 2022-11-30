import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import WrapperContainer from "../../common/WrapperContainer";
import { images } from "../../assets/collgeImages";
import CardAlum from "../../components/Card/card/CardAlum";
import CardStu from "../../components/Card/card/CardStu";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import { Grid } from "@mui/material";
import Facts from "../../components/Facts/Facts";
import Jobs from "../../components/Jobs/Jobs";
import Divider from "@mui/material/Divider";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
  let history = useNavigate();

  const imagesGallery = [
    { url: images.college1 },
    { url: images.college2 },
    { url: images.college3 },
  ];
  return (
    <WrapperContainer>
      <Grid container>
        <Grid item>
          <SimpleImageSlider
            width={"100vw"}
            height={"60vh"}
            images={imagesGallery}
            showBullets={true}
            showNavs={true}
          />
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
