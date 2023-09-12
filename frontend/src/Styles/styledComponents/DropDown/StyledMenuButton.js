import styled from "styled-components";
import { Dropdown, MenuButton, Menu, MenuItem } from "@mui/base";
import { menuItemClasses } from "@mui/base/MenuItem";
const blue = {
  50: "#F0F7FF",
  100: "#DAECFF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};
export const StyledTriggerButton = styled(MenuButton)(
  ({ theme }) => `
      font-family: IBM Plex Sans, sans-serif;
      font-weight: 600;
      font-size: 0.875rem;
      box-sizing: border-box;
      border-radius: 8px;
      padding: 8px 16px;
      line-height: 1.5;
      background: transparent;
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[800] : grey[200]
      };
      color: ${theme.palette.mode === "dark" ? blue[300] : blue[500]};
      cursor: pointer;
    
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 120ms;
    
      &:hover {
        background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
        border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
      }
    
      &:focus-visible {
        border-color: ${blue[400]};
        outline: 3px solid ${
          theme.palette.mode === "dark" ? blue[500] : blue[200]
        };
      }
      `
);
