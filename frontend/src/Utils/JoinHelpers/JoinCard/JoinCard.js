import {
  Stack,
  Typography,
  Paper,
  useMediaQuery,
  Avatar,
  Box,
} from "@mui/material";
import { RoundButton } from "../../../Styles/styledComponents/Buttons/RoundButton";

export const JoinCard = ({ title, selector, onClick }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        borderColor: "#bf00c3",
        position: "relative",
        borderWidth: selector ? "3px" : "1px",
      }}
      onClick={onClick}
    >
      {selector ? (
        <Box
          sx={{
            position: "absolute",
            top: "4px",
            right: "8px",
            backgroundColor: "#bf00c3",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
          }}
        />
      ) : (
        <Box
          sx={{
            position: "absolute",
            top: "4px",
            right: "8px",
            border: "1px solid #bf00c3",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
          }}
        />
      )}
      <Stack padding="2rem">
        <Typography variant="h6" sx={{ color: "black" }}>
          {title}
        </Typography>
      </Stack>
    </Paper>
  );
};
