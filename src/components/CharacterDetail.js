import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const CharacterDetail = ({ character }) => {
  return (
    <Container>
      <BackButtonContainer>
        <BackButton />
        <BackText>Back</BackText>
      </BackButtonContainer>

      <InnerContainer>
        <OverviewContainer>
          <HeaderContainer>
            <Header>{character.name}</Header>
            <SubHeader>{character.description}</SubHeader>
          </HeaderContainer>
          <CharacterImg src={character.img} alt={character.name} />
        </OverviewContainer>

        <div>
          {character.shareable && (
            <InfoContainer>
              <h5>Info you’re free to share</h5>

              <div>
                {character.shareable.map((info, id) => {
                  return <SubText key={id}>{info}</SubText>;
                })}
              </div>
            </InfoContainer>
          )}

          {character.trust && (
            <InfoContainer>
              <h5>Things to share with only those you trust</h5>
              <div>
                {character?.trust?.map((info, id) => {
                  return <SubText key={id}>{info}</SubText>;
                })}
              </div>
            </InfoContainer>
          )}
        </div>
      </InnerContainer>
    </Container>
  );
};

const BackButton = styled(ArrowBackIosIcon)`
  color: gray;
  font-size: 24px;
  &:hover {
    transform: scale(1.1);
  }
`;

const BackText = styled.div`
  color: gray;
  font-size: 18px;
  &:hover {
    transform: scale(1.1);
  }
`;

// resize on hover
const BackButtonContainer = styled.div`
  color: gray;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 20px;
  cursor: pointer;
  user-select: none;
`;

const Container = styled.div`
  min-height: 100vh;
`;

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #ffffff;
  color: black;
  @media (max-width: 768px) {
  }
`;

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  gap: 10px;
`;

const Header = styled.h1`
  font-size: 24px;
  margin: 0;
  padding: 0;
`;

const SubHeader = styled.p`
  font-size: 18px;
  margin: 0;
  padding: 0;
`;

const CharacterImg = styled.img`
  height: 500px;
  border-radius: 16px;
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const SubText = styled.p`
  font-size: 14px;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 500px;
  background-color: #ececec;
  border-radius: 16px;
  padding: 20px;
  margin: 20px;
`;
