import { NavLink } from "react-router-dom";

import styled, { css } from "styled-components";

const blockButtonStyles = css`
  background-color: rgb(53, 162, 159);
  color: white;
  box-shadow: 0 2px 0 0 rgba(55, 59, 63, 0.5);

  &:hover {
    background-color: rgb(73, 182, 179);
    cursor: pointer;
  }
`;

const orangeButtonStyles = css`
  background-color: rgb(255, 163, 111);
  color: white;

  &:hover {
    background-color: rgb(73, 182, 179);
    cursor: pointer;
  }
`;

const defaultButtonStyles = css`
  background-color: white;
  color: rgb(53, 162, 159);

  &:hover {
    background-color: white;
    color: rgb(73, 182, 179);
    cursor: pointer;
  }
`;

const getButtonStyles = (props) => {
  if (props.variant === "block") {
    return blockButtonStyles;
  }
  if (props.variant === "orange") {
    return orangeButtonStyles;
  }
  return defaultButtonStyles;
};

export const BlockButton = styled(NavLink)`
  text-decoration: none;
  padding: 0.8rem;
  border-radius: 5px;
  margin-left: 5px;
  ${getButtonStyles};
`;

export const RoundButton = styled.button`
  cursor: pointer;
  padding: 0.8rem 2rem;
  background-color: #bf00c3;
  border-radius: 20px;
  border: none;
  color: white;
  max-width: ${(props) => props.maxWidth};
  &:hover {
    background-color: #630065;
  }
`;
