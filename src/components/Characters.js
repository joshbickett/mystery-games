import styled from "@emotion/styled";
import { getCharacters } from "../utils/rss/gamesManager";

const characters = getCharacters();

export const Characters = () => {
  return (
    <FlexContainer style={{}}>
      {characters.map((character, index) => {
        return (
          <CharacterContainer>
            <CharacterImage src={character.img} alt={`char${index}`} />
            <InnerCharacterContainer>
              <h4 style={{ textAlign: "center", margin: 5 }}>
                {character.name}
              </h4>
              <p style={{ textAlign: "center", margin: 0 }}>
                {character.description}
              </p>
            </InnerCharacterContainer>
          </CharacterContainer>
        );
      })}
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5px;
  width: 100%;
`;

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
  width: 250px;
  min-height: 380px;
  @media (max-width: 768px) {
    width: 175px;
    min-height: 225px;
  }
`;

const InnerCharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const CharacterImage = styled.img`
  width: 200px;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 150px;
  }
`;
