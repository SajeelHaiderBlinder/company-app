import { Stack } from "@mui/material";
import { Hero } from "../../../Components/Hero/Hero";
import { Navbar } from "../../../Components/Navbar/Navbar";
import "./Header.scss";
import { Discover } from "../../../Components/Discover/Discover";

export const Header = () => {
  return (
    <>
      <Stack sx={{ padding: "5%", background: "#202125" }}>
        <Navbar />
        <Hero />
      </Stack>
      <Discover />
    </>
  );
};
