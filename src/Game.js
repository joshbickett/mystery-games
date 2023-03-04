import styled from "@emotion/styled";
import { Characters } from "./components/Characters";
import { Instructions } from "./components/Instructions";

import { useNavigate } from "react-router-dom";
import { GameProps } from "./components/GameProps";

export const Game = ({ game, setGame }) => {
  const navigate = useNavigate();

  const navigateToCharacter = (id) => {
    // navigate to /game/character with the id in the get params
    navigate(`/game/character/${id}`);
  };
  return (
    <Container>
      <Instructions />
      <CharacterContainer>
        <h1>1. Characters</h1>
        <Characters navigateToCharacter={navigateToCharacter} />
      </CharacterContainer>
      <GameProps />
    </Container>
  );
};
const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #ffffff;

  color: black;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
