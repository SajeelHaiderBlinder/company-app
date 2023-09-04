import { Stack } from "@mui/material";

import { Hero } from "../../../Components/Hero/Hero";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Discover } from "../../../Components/Discover/Discover";
import { CommunityBuilder } from "../../../Components/CommuinityBuilder/CommunityBuilder";
import { CompanyBuilder } from "../../../Components/CompanyBuilder/CompanyBuilder";
import { ImpactNumbers } from "../../../Components/ImpactNumbers/ImpactNumbers";

import "./Header.scss";
import { Sponsors } from "../../../Components/Sponsors/Sponsors";
import { Footer } from "../../../Components/Footer/Footer";
import { Testimonials } from "../../../Components/Testimonials/Testimonials";

export const Header = ({ user, setUser }) => {
  return (
    <>
      <Stack sx={{ padding: "5%" }}>
        <Navbar user={user} setUser={setUser} />
        <Hero />
      </Stack>
      <Discover />
      <Stack sx={{ padding: "5%" }}>
        <CommunityBuilder />
      </Stack>
      <Sponsors />
      <Stack sx={{ padding: "5%" }}>
        <CompanyBuilder />
      </Stack>
      <ImpactNumbers />
      <Testimonials />
      <Footer />
    </>
  );
};
