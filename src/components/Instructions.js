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
            alignItems: "flex-start",
          }}
        >
          <h1 style={{ margin: 0, padding: 0, textAlign: "left" }}>Your job</h1>
          <InstructionText>
            <strong>1.</strong> Choose a location for the game
          </InstructionText>

          <InstructionText>
            <strong>2.</strong> Decide how many players will be playing
          </InstructionText>
          <InstructionSubText>
            The game is setup to allow for between 7-9 players. You will notice
            two characters below, _ and _, are optional, if you are playing with
            fewer characters you may leave those players out and not send those
            characters to anyone.
          </InstructionSubText>

          <InstructionText>
            <strong>3.</strong> Share a character cards with each player
          </InstructionText>
          <InstructionSubText>
            Each card has a "Share" button, click this button and share the URL
            / Link by text message or email. Each character card also includes
            the instructions for the players about how to play and win.
          </InstructionSubText>
          <InstructionText>
            <strong>4.</strong> Print off the props and place them around
          </InstructionText>
          <InstructionSubText>
            The game props can be found at the bottom of this page. Once you
            print them off, you can place them around the game location. Feel
            free to get creative. Also if you'd like to get live props instead
            of print offs, that is a welcomed and fun idea as well.
          </InstructionSubText>
          <InstructionText>
            <strong>5.</strong> Drawn a simple clue on the Map
          </InstructionText>
          <InstructionSubText>_</InstructionSubText>
          <InstructionText>
            <strong>6.</strong> Check with the group if there are questions
          </InstructionText>
          <InstructionSubText>
            In the character cards you sent each player there is instructions on
            how to win, but it is a good idea to check with the group if there
            are questions. If the villian (Tex Ace) has questions, you'll want
            to be sure to answer those separately to not give away any clues to
            other players.
          </InstructionSubText>
          <InstructionText>
            <strong>7.</strong> Start the game!
          </InstructionText>
          <InstructionSubText>
            We recommend the game is played over a 2 hour period, but you may
            adjust it to be shorter or longer depending on the group.
          </InstructionSubText>
          <InstructionText>
            <strong>8.</strong> You may answer one yes or no question
          </InstructionText>
          <InstructionSubText>
            As the fortune teller, each player may ask you *one* yes or no
            question. If you prefer you can leave this part of the game out, but
            it adds a fun twist and allows you to help if the players are
            struggling to find the villian, motive, and method.
          </InstructionSubText>
          <InstructionText>
            <strong>9.</strong> Get into character and enjoy yourself
          </InstructionText>
          <InstructionSubText>
            Though you are the game host, you are also a character in the game
            and you should have fun! We think the host character is just a fun
            because you get to observer the players and see how they interact
            with each other and the game props.
          </InstructionSubText>
        </SplitLeft>
        <SplitRight style={{ backgroundColor: "rgb(236, 236, 236)" }}>
          <h1 style={{ padding: 0, margin: "10px 0", textAlign: "center" }}>
            What you'll need
          </h1>
          <p style={{ margin: "10px" }}>7 - 9 Players including yourself</p>
          <p style={{ margin: "10px" }}>A printer</p>
          <p style={{ margin: "10px" }}>A pen or pencil</p>
          <p style={{ margin: "10px" }}>Just read the instructions</p>
        </SplitRight>
      </SplitContainer>
    </div>
  );
};

const InstructionText = styled.p`
  font-size: 18px;
  text-align: left;
`;
const InstructionSubText = styled.p`
  font-size: 14px;
  margin: 0;
  text-align: left;
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
