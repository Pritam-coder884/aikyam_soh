import { Box, Toolbar } from "@mui/material";
import React from "react";
import Footer from "../components/Footer/Footer";
import HeaderWrapper from "./Header";

const WrapperContainer = ({ children, window }) => {
  //   const [mobileOpen, setMobileOpen] = React.useState(false);

  //   const handleDrawerToggle = () => {
  //     setMobileOpen(!mobileOpen);
  //   };

  return (
  <>
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <HeaderWrapper />
      <Box component="main" sx={{}}>
        {children}
      </Box>
    </Box>
    <Footer />
  </>
  );
};

export default WrapperContainer;
