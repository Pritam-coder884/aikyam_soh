import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import WrapperContainer from "../../common/WrapperContainer";
import { images } from "../../assets/collgeImages";

const Home = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    console.log(authToken);
    // if (authToken) {
    //     navigate('/')
    // }

    // if (!authToken) {
    //     navigate('/signup')
    // }
  }, []);
  const imagesGallery = [
    { url: images.college1 },
    { url: images.college2 },
    { url: images.college3 },
  ];
  return (
    <WrapperContainer>
      <SimpleImageSlider
        width={"100vw"}
        height={"50vw"}
        images={imagesGallery}
        showBullets={true}
        showNavs={true}
      />
      <button onClick={handleLogout}>Log out</button>
    </WrapperContainer>
  );
};

export default Home;
