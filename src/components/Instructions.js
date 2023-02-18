import styled from "@emotion/styled";

export const Instructions = ({ preview }) => {
  return (
    <Container>
      <h2>Instructions for Game Lead</h2>
      <p>
        <strong>IMPORTANT</strong> As a game lead you will know all the
        characters details and the mystery details. You will still get into
        character, but you will not play in the mystery. You will be the game
        host.
      </p>
      {!preview && (
        <p>
          <h3 style={{ textAlign: "center" }}>YOUR JOB</h3>
          <h4>1. Share the character cards with each player. </h4>
          <h4>2. Print off the props and place them around the house.</h4>
          <h4>3. Answer questions throughout the game for players</h4>
          <h4>4. Most importantly, get into character and enjoy yourself</h4>
        </p>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
`;
