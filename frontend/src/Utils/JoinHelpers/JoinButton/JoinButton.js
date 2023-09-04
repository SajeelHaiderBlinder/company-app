import React from "react";
import { RoundButton } from "../../../Styles/styledComponents/Buttons/RoundButton";
import { useNavigate } from "react-router";

export const JoinButton = ({ title }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    if (title.includes("Student")) {
      navigate("/join/signupstudent");
    } else if (title.includes("Community")) {
      navigate("/join/signupcommunity");
    } else if (title.includes("Company")) {
      navigate("/join/signupcompany");
    }
  };
  return <RoundButton onClick={handleRedirect}>Join {title}</RoundButton>;
};
