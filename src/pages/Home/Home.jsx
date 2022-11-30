import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WrapperContainer from "../../common/WrapperContainer";


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
  return (
    <WrapperContainer>
      Home page
      <button onClick={handleLogout}>Log out</button>
    </WrapperContainer>
  );
};

export default Home;
