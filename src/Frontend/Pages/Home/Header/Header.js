import { Stack } from "@mui/material";
import { Hero } from "../../../Components/Hero/Hero";
import { Navbar } from "../../../Components/Navbar/Navbar";
import "./Header.scss";
import { Discover } from "../../../Components/Discover/Discover";
import { CommunityBuilder } from "../../../Components/CommuinityBuilder/CommunityBuilder";
import { CompanyBuilder } from "../../../Components/CompanyBuilder/CompanyBuilder";
import { ImpactNumbers } from "../../../Components/ImpactNumbers/ImpactNumbers";

export const Header = () => {
  return (
    <>
      <Stack sx={{ padding: "5%", background: "#202125" }}>
        <Navbar />
        <Hero />
      </Stack>
      <Discover />
      <CommunityBuilder />
      <CompanyBuilder />
      <ImpactNumbers />
    </>
  );
};
