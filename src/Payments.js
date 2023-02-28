import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyFourImage from "./images/key-4.jpeg";

export const Payments = ({ setShowPaymentsPage }) => {
  // enter your email in the field
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const goToGameAssets = () => {
    console.log("go to game assets");
    if (email === "abc") navigate("/game");
  };
  return (
    <Container>
      <LeftSplit>
        <FormContainer>
          <h2>Enter in your code</h2>

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <CallToActionButton onClick={goToGameAssets}>
            GET THE GAME
          </CallToActionButton>
        </FormContainer>
      </LeftSplit>
      <RightSplit>
        <img
          src={KeyFourImage}
          alt="key"
          style={{ width: "300px", borderRadius: "40px", margin: 20 }}
        />
      </RightSplit>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  justify-content: center;

  background-color: black;
  color: white;
  text-align: center;
  overflow: hidden;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const CallToActionButton = styled.button`
  cursor: pointer;
  margin: 15px;
  font-size: 35px;
  padding: 10px 40px;
  background-color: #ececec;
  color: black;
  border-radius: 15px;
  user-select: none;
  border: none;
  &:hover {
    background-color: black;
    color: white;
  }
  &:active {
    scale: 1.1;
  }
`;

const LeftSplit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RightSplit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: black;
  text-align: center;
  overflow: hidden;
  border-radius: 10px;
  width: 500px;
  padding: 20px;

  @media (max-width: 768px) {
    width: 400px;
  }
`;
