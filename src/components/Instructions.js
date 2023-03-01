import styled from "@emotion/styled";
import { SplitContainer, SplitLeft, SplitRight } from "./StyledComponents";

export const Instructions = () => {
  return (
    <SplitContainer>
      <SplitLeft style={{ backgroundColor: "black" }}>
        <h1>Instructions for Game Lead</h1>
        <strong>IMPORTANT</strong>
        <ImportantText>
          As a game lead you will know all the characters details and the
          mystery details. You will still get into character, but you will not
          parttake in solving the mystery. You will be the game host and already
          know the answer.
        </ImportantText>
      </SplitLeft>
      <SplitRight
        style={{
          backgroundColor: "#ececec",
          padding: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <InstructionSubHeader>What you'll need</InstructionSubHeader>
          <InstructionText>9 Players including yourself</InstructionText>
          <InstructionText>A printer</InstructionText>
          <InstructionText>To read the instructions</InstructionText>
        </div>
        <div>
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
        </div>
      </SplitRight>
    </SplitContainer>
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

const ImportantText = styled.p`
  font-size: 18px;
`;
