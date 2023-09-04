import { Stack, Typography, Paper, useMediaQuery, Avatar } from "@mui/material";
import { RoundButton } from "../../Styles/styledComponents/Buttons/RoundButton";
import { JoinCard } from "../../Utils/JoinHelpers/JoinCard/JoinCard";
import { useCallback, useState } from "react";
import { JoinButton } from "../../Utils/JoinHelpers/JoinButton/JoinButton";
import { useNavigate } from "react-router";

export const Join = () => {
  const [studentSelector, setStudentSelector] = useState(true);
  const [communitySelector, setCommunitySelector] = useState(false);
  const [companySelector, setCompanySelector] = useState(false);
  const [joinTag, setJoinTag] = useState("as a Student");
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const handleStudentClick = () => {
    setStudentSelector(true);
    setCommunitySelector(false);
    setCompanySelector(false);
    setJoinTag("as a Student");
  };
  const handleCommunityClick = () => {
    setStudentSelector(false);
    setCommunitySelector(true);
    setCompanySelector(false);
    setJoinTag("as a Community");
  };
  const handleCompanyClick = () => {
    setStudentSelector(false);
    setCommunitySelector(false);
    setCompanySelector(true);
    setJoinTag("as a Company");
  };
  return (
    <>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        padding="3%"
        alignItems={"center"}
        spacing={2}
      >
        <Avatar />
        <Typography
          variant="subtitle1"
          sx={{ color: "black", fontSize: isSmallScreen ? "1.5rem" : "2rem" }}
        >
          NexaPro
        </Typography>
      </Stack>
      <Paper
        variant="outlined"
        sx={{ borderColor: "#bf00c3", margin: "3% 15%" }}
      >
        <Stack
          sx={{ borderColor: "black", padding: "5%" }}
          direction="column"
          alignItems="center"
          spacing={isSmallScreen ? 2 : 6}
        >
          <Typography
            variant={isSmallScreen ? "h5" : "h4"}
            sx={{ color: "black" }}
          >
            Join as a Student, a Company, or a Community Builder
          </Typography>
          <Stack
            direction={isSmallScreen ? "column" : "row"}
            alignItems="center"
            spacing={2}
          >
            <JoinCard
              title="I'm a Student"
              selector={studentSelector}
              onClick={handleStudentClick}
            />
            <JoinCard
              title="I'm a Community Builder"
              selector={communitySelector}
              onClick={handleCommunityClick}
            />
            <JoinCard
              title="I'm a Company"
              selector={companySelector}
              onClick={handleCompanyClick}
            />
          </Stack>
          <JoinButton title={joinTag} />
          <Typography
            variant={isSmallScreen ? "body2" : "body1"}
            sx={{ color: "black" }}
          >
            Already have an account?{" "}
            <span
              style={{ color: "#bf00c3", cursor: "pointer" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Log in
            </span>
          </Typography>
        </Stack>
      </Paper>
      <Stack alignItems="center">
        <Typography variant="body1" color="#bf00c3" sx={{ fontSize: "1rem" }}>
          @ 2023 ALL RIGHTS RESERVED
        </Typography>
      </Stack>
    </>
  );
};
