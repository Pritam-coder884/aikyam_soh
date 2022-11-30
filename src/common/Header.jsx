import React from "react";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Box, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";

const DrawerWrapper = () => {
  const history = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    history("/login");
  };
  React.useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    // console.log(authToken);
    // if (authToken) {
    //     navigate('/')
    // }

    // if (!authToken) {
    //     navigate('/signup')
    // }
  }, []);
  const pages = ["Jobs", "Events", "Stories"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "orange" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AIKYAM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                key="Events"
                onClick={() => {
                  history("/events");
                  handleCloseNavMenu();
                }}
              >
                <Typography textAlign="center">Events</Typography>
              </MenuItem>
              <MenuItem
                key="Jobs"
                onClick={() => {
                  history("/jobs");
                  handleCloseNavMenu();
                }}
              >
                <Typography textAlign="center">Jobs</Typography>
              </MenuItem>
              <MenuItem
                key="Stories"
                onClick={() => {
                  history("/stories");
                  handleCloseNavMenu();
                }}
              >
                <Typography textAlign="center">Stories</Typography>
              </MenuItem>
              <MenuItem
                key="reunion"
                onClick={() => {
                  history("/reunion");
                  handleCloseNavMenu();
                }}
              >
                <Typography textAlign="center">Reunion</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AIKYAM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key="stories"
              onClick={() => {
                history("/stories");
                handleCloseNavMenu();
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Stories
            </Button>
            <Button
              key="jobs"
              onClick={() => {
                history("/jobs");
                handleCloseNavMenu();
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Jobs
            </Button>
            <Button
              key="events"
              onClick={() => {
                history("/events");
                handleCloseNavMenu();
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Events
            </Button>
            <Button
              key="reunion"
              onClick={() => {
                history("/reunion");
                handleCloseNavMenu();
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Reunion
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ backgroundColor: "green" }}
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="Profile" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem key="logout" onClick={handleLogout}>
                <Typography textAlign="center">Log out</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default DrawerWrapper;
