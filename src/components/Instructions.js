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
      <SplitRight style={{ backgroundColor: "#ececec" }}>
        <div>
          <h3>YOUR JOB</h3>
          <h4>1. Share the character cards with each player. </h4>
          <h4>2. Print off the props and place them around the house.</h4>
          <h4>3. Answer questions throughout the game for players</h4>
          <h4>4. Most importantly, get into character and enjoy yourself</h4>
        </div>
      </SplitRight>
    </SplitContainer>
  );
};

const ImportantText = styled.p`
  font-size: 18px;
`;
