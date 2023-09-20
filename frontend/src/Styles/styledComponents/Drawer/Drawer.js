import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

const drawerWidth = 240;

const openedMixin = (theme, background) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: background || "#bf00c3",
});

const closedMixin = (theme, background) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  background: background || "#bf00c3",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "background", // Exclude the background prop
})(({ theme, open, background }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme, background),
    "& .MuiDrawer-paper": openedMixin(theme, background),
  }),
  ...(!open && {
    ...closedMixin(theme, background),
    "& .MuiDrawer-paper": closedMixin(theme, background),
  }),
}));
