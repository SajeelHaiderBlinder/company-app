import {
  Stack,
  Typography,
  IconButton,
  Container,
  useMediaQuery,
  Paper,
} from "@mui/material";
import { RoundButton } from "../../Styles/styledComponents/Buttons/RoundButton";

export const Join = () => {
  return (
    <>
      <Stack direction={"row"}>
        <img src="" alt="" />
        <Typography variant="subtitle1" sx={{ color: "black" }}>
          NexaPro
        </Typography>
      </Stack>
      <Stack
        sx={{ borderColor: "black", padding: "5%" }}
        direction="column"
        alignItems={"center"}
        spacing={6}
      >
        <Typography variant="h4" sx={{ color: "black" }}>
          Join as a Student, a Company or a Community Builder
        </Typography>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Paper variant="outlined" sx={{ borderColor: "#bf00c3" }}>
            <Typography variant="h5" sx={{ color: "black" }}>
              I'm a Student
            </Typography>
          </Paper>
          <Paper variant="outlined" sx={{ borderColor: "#bf00c3" }}>
            <Typography variant="h5" sx={{ color: "black" }}>
              I'm a Community Builder
            </Typography>
          </Paper>
          <Paper variant="outlined" sx={{ borderColor: "#bf00c3" }}>
            <Typography variant="h5" sx={{ color: "black" }}>
              I'm a Company
            </Typography>
          </Paper>
        </Stack>
        <RoundButton>Join</RoundButton>
        <Typography variant="body1" sx={{ color: "black" }}>
          Already have an account? Log in
        </Typography>
      </Stack>
    </>
  );
};
