import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import WrapperContainer from "../../common/WrapperContainer";
import { images } from "../../assets/collgeImages";

const Home = () => {
  let history = useNavigate();

  const imagesGallery = [
    { url: images.college1 },
    { url: images.college2 },
    { url: images.college3 },
  ];
  return (
    <WrapperContainer>
      <SimpleImageSlider
        width={"100vw"}
        height={"60vh"}
        images={imagesGallery}
        showBullets={true}
        showNavs={true}
      />
      <button>Log out</button>
    </WrapperContainer>
  );
};

export default Home;
