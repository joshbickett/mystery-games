import styled from "@emotion/styled";

import { getGameProps } from "../utils/rss/gamesManager";

const props = getGameProps();

export const GameProps = ({ preview, navigateToCharacter }) => {
  return (
    <Container>
      <h1>Game Props</h1>
      <PropContainer>
        {props.map((character, index) => {
          return (
            <CharacterContainer>
              {!preview && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <FlexContainer>
                    <PrintCardButton>Print</PrintCardButton>
                  </FlexContainer>
                </div>
              )}
              <CharacterImage src={character.img} alt={`char${index}`} />
              <InnerCharacterContainer>
                <h4 style={{ textAlign: "center", margin: 5 }}>
                  {character.name[0]}
                </h4>
                <p style={{ textAlign: "center", margin: 0 }}>
                  {character.description}
                </p>
              </InnerCharacterContainer>
            </CharacterContainer>
          );
        })}
      </PropContainer>
    </Container>
  );
};

const PrintCardButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 5px;
  margin: 5px;
  width: 100%;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

const Container = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;
const PropContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
