import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import LinearProgress from "@mui/material/LinearProgress";

import "react-multi-carousel/lib/styles.css";
import { Dropdown, MenuButton, Menu, MenuItem } from "@mui/base";
import { Avatar, Grid, Paper, Stack } from "@mui/material";
import { CommunitiesCard } from "../../../../Utils/CommunitiesCard/CommunitiesCard";
import { RoundButton } from "../../../../Styles/styledComponents/Buttons/RoundButton";
import { MapContainer, TileLayer } from "react-leaflet";
import { NetworkingCard } from "../../../../Utils/Networking/NetworkingCard";
const InfoCard = ({ title, description }) => (
  <Paper elevation={12} sx={{ padding: "2%", borderRadius: "10px" }}>
    <Typography variant="h5">{title}</Typography>
    <Typography variant="subtitle1">{description}</Typography>
  </Paper>
);
export const CommunitiesDetail = () => {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Stack spacing={2}>
        <Stack
          direction={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Stack maxWidth={"400px"} spacing={2}>
            <Typography variant="h4">Google Developer Student Club</Typography>
            <Typography variant="subtiitle1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
              quia temporibus ratione quam maiores harum eius sunt voluptas
              expedita molestias cupiditate dicta labore placeat quos, officia
              velit. Laudantium, consectetur ab.
            </Typography>
            <RoundButton maxWidth="150px"> Visit Site</RoundButton>
          </Stack>
          <CommunitiesCard />
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <InfoCard
            title="Learn"
            description="Meet students interested in developer
          technologies at your college or university. All
          are welcome, including those with diverse
          backgrounds and different majors."
          />
          <InfoCard
            title="Connect"
            description="Learn about a range of technical topics and
          ain new skills through hands-on workshops,
          vents, talks, and project-building activities
          nline and in-person."
          />
          <InfoCard
            title="Grow"
            description="Apply new learnings to build great solutions for
          local problems. Advance your skills, career, and
          network. Give back to your community by
          helping others learn."
          />
        </Stack>
        <Stack margin={"1.5rem"}>
          <Typography variant="h4">Find a Chapter Near You</Typography>
          <MapContainer
            center={[31.590479147818932, 74.30019533513024]}
            zoom={13}
          >
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </Stack>
        <Stack>
          <Typography vairiant="h3">All GDSC Leads Directory</Typography>
          <Grid container spacing={12} padding={"5%"}>
            <NetworkingCard
              logo={null}
              title={"Sajeel Haider"}
              subtitle={["Web Developer"]}
              description="A kiddo who uses Bootstrap and Laravel
              in web development. Currently playing
              around with design via Figma"
              email="sajeelblinder@gmail.com"
            />
            <NetworkingCard
              logo={null}
              title={"Sajeel Haider"}
              subtitle={["Web Developer"]}
              description="A kiddo who uses Bootstrap and Laravel
            in web development. Currently playing
            around with design via Figma"
              email="sajeelblinder@gmail.com"
            />
            <NetworkingCard
              logo={null}
              title={"Sajeel Haider"}
              subtitle={["Web Developer"]}
              description="A kiddo who uses Bootstrap and Laravel
          in web development. Currently playing
          around with design via Figma"
              email="sajeelblinder@gmail.com"
            />
            <NetworkingCard
              logo={null}
              title={"Sajeel Haider"}
              subtitle={["Web Developer"]}
              description="A kiddo who uses Bootstrap and Laravel
            in web development. Currently playing
            around with design via Figma"
              email="sajeelblinder@gmail.com"
            />
            <NetworkingCard
              logo={null}
              title={"Sajeel Haider"}
              subtitle={["Web Developer"]}
              description="A kiddo who uses Bootstrap and Laravel
          in web development. Currently playing
          around with design via Figma"
              email="sajeelblinder@gmail.com"
            />
            <NetworkingCard
              logo={null}
              title={"Sajeel Haider"}
              subtitle={["Web Developer"]}
              description="A kiddo who uses Bootstrap and Laravel
        in web development. Currently playing
        around with design via Figma"
              email="sajeelblinder@gmail.com"
            />
            <NetworkingCard
              logo={null}
              title={"Sajeel Haider"}
              subtitle={["Web Developer"]}
              description="A kiddo who uses Bootstrap and Laravel
      in web development. Currently playing
      around with design via Figma"
              email="sajeelblinder@gmail.com"
            />
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
};
