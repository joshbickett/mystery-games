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
      <SplitContainer style={{ gridTemplateColumns: "1fr 1fr" }}>
        <SplitLeft
          style={{
            backgroundColor: "rgb(236, 236, 236)",
            color: "black",
            padding: "20px 40px",
          }}
        >
          <InstructionSubHeader>Your job</InstructionSubHeader>
          <InstructionText>
            <strong>1.</strong> Share a character cards with each player
          </InstructionText>
          <InstructionText>
            <strong>2.</strong> Print off the props and place them around the
            house
          </InstructionText>
          <InstructionText>
            <strong>3.</strong> Answer questions throughout the game for players
          </InstructionText>
          <InstructionText>
            <strong>4.</strong> Most importantly, get into character and enjoy
            yourself
          </InstructionText>
        </SplitLeft>
        <SplitRight>
          <h1 style={{ padding: 0, margin: "10px 0" }}>What you'll need</h1>
          <p style={{ margin: "10px" }}>7 - 9 Players including yourself</p>
          <p style={{ margin: "10px" }}>A printer</p>
          <p style={{ margin: "10px" }}>Just read the instructions</p>
        </SplitRight>
      </SplitContainer>
    </div>
  );
};

// underlined text
const InstructionSubHeader = styled.h3`
  font-size: 24px;
  margin: 0;
  padding: 0;
  text-decoration: underline;
  text-align: center;
`;

const InstructionText = styled.p`
  font-size: 18px;
  text-align: center;
`;

const RowContainer = styled.div`
  background-color: black;

  color: white;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;
