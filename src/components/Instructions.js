import styled from "@emotion/styled";
import { SplitContainer, SplitLeft, SplitRight } from "./StyledComponents";

export const Instructions = () => {
  return (
    <div style={{ width: "100%" }}>
      <RowContainer>
        <h1 style={{ margin: 0, padding: 0, marginBottom: 20 }}>
          Instructions for Game Lead
        </h1>
        <strong>IMPORTANT</strong>
        <p>
          As a game lead you will know all the characters details and the
          mystery details. You will still get into character, but you will not
          parttake in solving the mystery. You will be the game host and already
          know the answer.
        </p>
      </RowContainer>
      <SplitContainer style={{ gridTemplateColumns: "2fr 1fr" }}>
        <SplitLeft
          style={{
            color: "black",
            padding: "20px 40px",
            backgroundColor: "rgb(249, 249, 249)",
          }}
        >
          <h1 style={{ margin: 0, padding: 0 }}>Your job</h1>
          <InstructionText>
            <strong>1.</strong> Choose a physical location to host the Mystery
            Game at
          </InstructionText>

          <InstructionText>
            <strong>2.</strong> Share a character cards with each player
          </InstructionText>
          <InstructionSubText>
            Each card has a "Share" button, click this button and share the URL
            / Link by text message or email. Each character card also includes
            the instructions for the players about how to play and win.
          </InstructionSubText>
          <InstructionText>
            <strong>3.</strong> Print off the props and place them around the
            location of the game.
          </InstructionText>
          <InstructionText>
            <strong>4.</strong> Before the game starts check with the group if
            anyone has questions about how to play and win.
          </InstructionText>
          <InstructionText>
            <strong>5.</strong> Start the game!
          </InstructionText>
          <InstructionText>
            <strong>6.</strong> As the fortune teller, may answer one yes / or
            question throughout the game to help the players.
          </InstructionText>
          <InstructionText>
            <strong>7.</strong> Most importantly, get into character and enjoy
            yourself
          </InstructionText>
        </SplitLeft>
        <SplitRight style={{ backgroundColor: "rgb(236, 236, 236)" }}>
          <h1 style={{ padding: 0, margin: "10px 0" }}>What you'll need</h1>
          <p style={{ margin: "10px" }}>7 - 9 Players including yourself</p>
          <p style={{ margin: "10px" }}>A printer</p>
          <p style={{ margin: "10px" }}>Just read the instructions</p>
        </SplitRight>
      </SplitContainer>
    </div>
  );
};

const InstructionText = styled.p`
  font-size: 18px;
`;
const InstructionSubText = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0;
  margin-left: 20px;
`;

const RowContainer = styled.div`
  background-color: black;

  color: white;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;
