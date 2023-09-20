import React, { useEffect, useState } from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
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
import { Avatar, Stack, useMediaQuery } from "@mui/material";
import InputBase from "@mui/material/InputBase";
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
import icon_PeopleCommunity from "../../Assets/UserDashboard/icon_PeopleCommunity.png";
import icon_resources from "../../Assets/UserDashboard/icon_resources.png";
import icon_community from "../../Assets/UserDashboard/icon_community.png";
import icon_networking from "../../Assets/UserDashboard/icon_networking.png";
import icon_internship from "../../Assets/UserDashboard/icon_internship.png";
import icon_dashboard_btn from "../../Assets/UserDashboard/icon_dashboard_btn.png";
import icon_events from "../../Assets/UserDashboard/icon_events.png";

import { alpha } from "@mui/material/styles";
import { CommunitiesDetail } from "../../Components/UserDashboard/Communities/CommunitiesDetail/CommunitiesDetail";
const drawerWidth = 240;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "#bf00c3",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  background: "#bf00c3",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const UserDashboard = () => {
  const isScreenSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const theme = useTheme();
  const [open, setOpen] = useState(!isScreenSmall);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
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

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", color: "black" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
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

            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              className="ml-6"
            >
              <Stack>
                <Typography variant="h6" component="div">
                  {/* Dashboard */}
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <NotificationsIcon count={3} />
                <Avatar src={profilePic} />
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose} color="white">
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <List>
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
          <Route path="/events" element={<Events />} />{" "}
          <Route path="/communities/:id" element={<CommunitiesDetail />} />
          <Route path="/communities" element={<Communities />}></Route>
        </Routes>
      </Box>
    </>
  );
};
