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

import icon_product from "../../Assets/ComDashboard/icon_product.png";
import icon_comdashboard from "../../Assets/ComDashboard/icon_comdashboard.png";
import icon_comresponse from "../../Assets/ComDashboard/icon_comresponse.png";
import icon_food from "../../Assets/ComDashboard/icon_food.png";
import icon_joborintern from "../../Assets/ComDashboard/icon_joborintern.png";
import icon_merchandise from "../../Assets/ComDashboard/icon_merchandise.png";
import icon_space from "../../Assets/ComDashboard/icon_space.png";
import icon_sponsorpool from "../../Assets/ComDashboard/icon_sponsorpool.png";
import icon_techevents from "../../Assets/ComDashboard/icon_techevents.png";

import { alpha } from "@mui/material/styles";
import { ComDashboard } from "../../Components/CompanyDashboard/ComDashboard/ComDashboard";
import { ComJoborInternship } from "../../Components/CompanyDashboard/ComJoborInternship/ComJoborInternship";
import { CreateJoborInternship } from "../../Components/CompanyDashboard/ComJoborInternship/CreateJoborInternship/CreateJoborInternship";
import { ComSponsorPool } from "../../Components/CompanyDashboard/ComSponsorPool/ComSponsorPool";
import { ComMvpProduct } from "../../Components/CompanyDashboard/ComMvpProduct/ComMvpProduct";
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
  background: "#393939",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  background: "#393939",
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

export const CompanyDashboard = () => {
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
                <Typography variant="h6" component="div"></Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
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
            <NavLink to="/companydashboard/dashboard">
              <SidebarSelector
                open={open}
                text={"Dashboard"}
                icon={icon_comdashboard}
              />
            </NavLink>
            <SidebarSelector
              open={open}
              text={"Responses"}
              icon={icon_comresponse}
            />
            <NavLink to="/companydashboard/joborinternship">
              <SidebarSelector
                open={open}
                text={"Job/Internships"}
                icon={icon_joborintern}
              />
            </NavLink>
            <NavLink to="/companydashboard/product">
              <SidebarSelector
                open={open}
                text={"Product"}
                icon={icon_product}
              />
            </NavLink>
            <NavLink to="/companydashboard/sponsorpool">
              <SidebarSelector
                open={open}
                text={"Sponsor Pool"}
                icon={icon_sponsorpool}
              />
            </NavLink>
            <SidebarSelector
              open={open}
              text={"Tech Events"}
              icon={icon_techevents}
            />
            <NavLink to="/companydashboard/">
              <SidebarSelector
                open={open}
                text={"Merchandise"}
                icon={icon_merchandise}
              />
            </NavLink>
            <SidebarSelector open={open} text={"Space"} icon={icon_space} />
            <NavLink to="/companydashboard/">
              <SidebarSelector open={open} text={"Food"} icon={icon_food} />
            </NavLink>
          </List>
          <Divider color={"white"} />
        </Drawer>

        <Routes>
          <Route path="/dashboard" element={<ComDashboard />} />
          <Route
            path="/joborinternship"
            element={<ComJoborInternship />}
          ></Route>
          <Route
            path="/joborinternship/createJoborIntern"
            element={<CreateJoborInternship />}
          />
          <Route path="/product" element={<ComMvpProduct />}></Route>
          <Route path="/sponsorpool" element={<ComSponsorPool />}></Route>
        </Routes>
      </Box>
    </>
  );
};
