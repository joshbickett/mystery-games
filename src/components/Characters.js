import styled from "@emotion/styled";
import { getCharacters } from "../utils/rss/gamesManager";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";

const characters = getCharacters();

export const Characters = ({ preview, navigateToCharacter }) => {
  return (
    <Container>
      {characters.map((character, index) => {
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
                  <ShareCardButton
                    onClick={() => navigateToCharacter(character.id)}
                  >
                    View
                  </ShareCardButton>
                </FlexContainer>

                <FlexContainer>
                  <ShareCardButton>Share</ShareCardButton>
                </FlexContainer>

                <FlexContainer>
                  <ChangeCircleOutlinedIcon style={{ cursor: "pointer" }} />
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
    </Container>
  );
};

const ShareCardButton = styled.button`
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
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5px;
  width: 100%;
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
