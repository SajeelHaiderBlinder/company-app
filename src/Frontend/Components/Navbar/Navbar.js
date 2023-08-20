import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

import logo from "../../Assets/Header/logo.png";
import { RoundButton } from "../../Styles/styledComponents/Buttons/RoundButton";
import { useState } from "react";
import "./Navbar.scss";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent={{ xs: "space-between" }}
      paddingX={2}
    >
      <Stack direction="row" alignItems="center">
        <Avatar
          src={logo}
          alt="logo"
          sx={{ width: 30, height: 30, marginRight: 1 }}
        />
        <Typography variant="body1">company-name</Typography>
      </Stack>

      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleMenuOpen}
        sx={{
          display: { xs: "block", md: "none" },
          color: "black",
        }}
      >
        <MenuIcon />
      </IconButton>

      <Stack
        direction="row"
        spacing={{ xs: 1, md: 3 }}
        alignItems="center"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <NavLink to="/">
          <Typography variant="body1">Home</Typography>
        </NavLink>
        <NavLink to="/aboutus">
          <Typography variant="body1">About us</Typography>
        </NavLink>
        <NavLink to="/howitworks">
          <Typography variant="body1">How it works</Typography>
        </NavLink>
        <NavLink to="/services">
          <Typography variant="body1">Services</Typography>
        </NavLink>
        <NavLink to="/login">
          <Typography variant="body1">Login</Typography>
        </NavLink>
        <NavLink to="/signup">
          <RoundButton>Sign up</RoundButton>
        </NavLink>
      </Stack>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <NavLink to="/" className="menu-item-link">
            Home
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <NavLink to="/aboutus" className="menu-item-link">
            About us
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <NavLink to="/howitworks" className="menu-item-link">
            How it works
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <NavLink to="/services" className="menu-item-link">
            Services
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <NavLink to="/login" className="menu-item-link">
            Login
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <NavLink to="/signup" className="menu-item-link">
            Sign up
          </NavLink>
        </MenuItem>
      </Menu>
    </Stack>
  );
};
