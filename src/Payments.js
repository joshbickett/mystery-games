import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

export const Payments = () => {
  // enter your email in the field
  return (
    <Container>
      <div
        style={{
          backgroundColor: "#ffffff",
          color: "black",
          height: "500px",
          width: "300px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {" "}
        <h1>Sign up</h1>
        <p>Enter your email to pay for your game.</p>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <button>Get Access</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  text-align: center;
  overflow: hidden;
`;
