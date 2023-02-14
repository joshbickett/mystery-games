import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import KeyFourImage from "./images/key-4.jpeg";

export const Payments = () => {
  // enter your email in the field
  return (
    <Container>
      <LeftSplit>
        <FormContainer>
          <h1>GET THE GAME</h1>
          <p>Enter in your access code</p>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <button>Get Access</button>
        </FormContainer>
      </LeftSplit>
      <RightSplit>
        <img
          src={KeyFourImage}
          alt="key"
          style={{ width: "300px", borderRadius: "40px" }}
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
