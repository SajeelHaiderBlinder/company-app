import React, { useEffect, useState } from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "react-multi-carousel/lib/styles.css";
import {
  Avatar,
  Grid,
  Menu,
  MenuItem,
  Stack,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import profilePic from "../../Assets/UserDashboard/dashboard/profilePic.png";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { SidebarSelector } from "../../Utils/UserDashboard/SidebarSelector/SidebarSelector";
import { Dashboard } from "../../Components/UserDashboard/Dashboard/Dashboard";
import { Recruitment } from "../../Components/UserDashboard/Recruitment/Recruitment";
import { Internship } from "../../Components/UserDashboard/Internship/Internship";
import { Networking } from "../../Components/UserDashboard/Networking/Networking";
import { Events } from "../../Components/UserDashboard/Events/Events";
import { Communities } from "../../Components/UserDashboard/Communities/Communities";
import icon_Building from "../../Assets/UserDashboard/icon_Building.png";
import icon_inbox from "../../Assets/UserDashboard/icon_inbox.png";
import icon_resources from "../../Assets/UserDashboard/icon_resources.png";
import icon_community from "../../Assets/UserDashboard/icon_community.png";
import icon_networking from "../../Assets/UserDashboard/icon_networking.png";
import icon_internship from "../../Assets/UserDashboard/icon_internship.png";
import icon_dashboard_btn from "../../Assets/UserDashboard/icon_dashboard_btn.png";
import icon_events from "../../Assets/UserDashboard/icon_events.png";
import logo from "../../Assets/Utils/Logo.png";
import { useLocation } from "react-router-dom";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../Styles/styledComponents/Search/Search";
import {
  AppBar,
  DrawerHeader,
} from "../../Styles/styledComponents/AppBar/AppBar";
import { Drawer } from "../../Styles/styledComponents/Drawer/Drawer";

import { CommunitiesDetail } from "../../Components/UserDashboard/Communities/CommunitiesDetail/CommunitiesDetail";

export const UserDashboard = () => {
  const location = useLocation();
  const isScreenSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const theme = useTheme();
  const [open, setOpen] = useState(!isScreenSmall);

  const [profileDrop, setProfileDrop] = useState(null);
  const openProfile = Boolean(profileDrop);
  const handleClick = (event) => {
    setProfileDrop(event.currentTarget);
  };
  const handleClose = () => {
    setProfileDrop(null);
  };

  const [notificationDrop, setNotificationDrop] = React.useState(null);
  const openNotification = Boolean(notificationDrop);
  const handleClickNotification = (event) => {
    setNotificationDrop(event.currentTarget);
  };
  const handleCloseNotification = () => {
    setNotificationDrop(null);
  };

  useEffect(() => {
    if (isScreenSmall) {
      setOpen(false);
    }
  }, [isScreenSmall]);

  const handleDrawerOpen = () => {
    setOpen(true);
    if (isScreenSmall) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const dashboardText =
    location.pathname === "/userdashboard/dashboard"
      ? "Dashboard"
      : location.pathname === "/userdashboard/internship"
      ? "Internships"
      : location.pathname === "/userdashboard/recruitment"
      ? "Recruitments"
      : location.pathname === "/userdashboard/networking"
      ? "Networking"
      : location.pathname === "/userdashboard/events"
      ? "Events"
      : location.pathname === "/userdashboard/communities"
      ? "Communities"
      : "Resources";

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", color: "black" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <Grid container alignItems="center">
              <Grid item xs={6} display={"flex"} alignItems={"center"}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: 5,
                    ...(open && { display: "none" }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div">
                  {dashboardText}
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                container
                justifyContent="flex-end"
                spacing={2}
                alignItems={"center"}
              >
                <Grid item>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </Grid>
                <Grid item>
                  <NotificationsIcon
                    count={3}
                    id="basic-button"
                    aria-controls={openNotification ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openNotification ? "true" : undefined}
                    onClick={handleClickNotification}
                  />
                  <Menu
                    id="basic-menu"
                    anchorEl={notificationDrop}
                    open={openNotification}
                    onClose={handleCloseNotification}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Info</MenuItem>
                    <MenuItem onClick={handleClose}>Info</MenuItem>
                  </Menu>
                </Grid>

                <Grid item>
                  <Avatar
                    src={profilePic}
                    id="basic-button"
                    aria-controls={openProfile ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openProfile ? "true" : undefined}
                    onClick={handleClick}
                  />
                  <Menu
                    id="basic-menu"
                    anchorEl={profileDrop}
                    open={openProfile}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} background={"#bf00c3"}>
          <DrawerHeader>
            <Stack direction={"row-reverse"} alignItems={"center"}>
              <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
              <Stack direction={"row"} spacing={0.4} alignItems={"center"}>
                <img src={logo} alt="logo" />
                <Typography color="white" fontWeight={"bold"} variant="h5">
                  Confiniti.&#174;
                </Typography>
              </Stack>
            </Stack>
          </DrawerHeader>
          <List sx={{ marginTop: "2rem" }}>
            <NavLink to="/userdashboard/dashboard">
              <SidebarSelector
                open={open}
                text={"Dashboard"}
                icon={icon_dashboard_btn}
              />
            </NavLink>
            <SidebarSelector open={open} text={"Inbox"} icon={icon_inbox} />
            <NavLink to="/userdashboard/internship">
              <SidebarSelector
                open={open}
                text={"Internships"}
                icon={icon_internship}
              />
            </NavLink>
            <NavLink to="/userdashboard/recruitment">
              <SidebarSelector
                open={open}
                text={"Recruitments"}
                icon={icon_Building}
              />
            </NavLink>
            <NavLink to="/userdashboard/networking">
              <SidebarSelector
                open={open}
                text={"Networking"}
                icon={icon_networking}
              />
            </NavLink>
            <NavLink to="/userdashboard/events">
              <SidebarSelector open={open} text={"Events"} icon={icon_events} />
            </NavLink>
            <NavLink to="/userdashboard/communities">
              <SidebarSelector
                open={open}
                text={"Communities"}
                icon={icon_community}
              />
            </NavLink>
            <SidebarSelector
              open={open}
              text={"Resources"}
              icon={icon_resources}
            />
          </List>
          <Divider color={"white"} />
        </Drawer>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/events" element={<Events />} />
          <Route path="/communities/:id" element={<CommunitiesDetail />} />
          <Route path="/communities" element={<Communities />}></Route>
        </Routes>
      </Box>
    </>
  );
};
