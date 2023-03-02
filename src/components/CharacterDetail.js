import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

export const CharacterDetail = ({ character }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/game");
  };
  return (
    <Container>
      <BackButtonContainer onClick={goBack}>
        <BackButton />
        <BackText>Back</BackText>
      </BackButtonContainer>

      <InnerContainer>
        <OverviewContainer>
          <HeaderContainer>
            <CharacterImg src={character.img} alt={character.name} />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Header>{character.name}</Header>
              <SubHeader>{character.description}</SubHeader>
            </div>
          </HeaderContainer>

          <InformationContainer id="info-container">
            {character.shareable && (
              <Information>
                <InformationHeader>Info you’re free to share</InformationHeader>

                <div>
                  {character.shareable.map((info, id) => {
                    return <SubText key={id}>{info}</SubText>;
                  })}
                </div>
              </Information>
            )}

            {character.trust && (
              <Information>
                <InformationHeader>
                  Be careful with who you share this info with
                </InformationHeader>
                <div>
                  {character?.trust?.map((info, id) => {
                    return <SubText key={id}>{info}</SubText>;
                  })}
                </div>
              </Information>
            )}
          </InformationContainer>
        </OverviewContainer>
      </InnerContainer>
    </Container>
  );
};

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 20px;
  gap: 20px;
`;

const InformationHeader = styled.h5`
  margin: 0 5px;
  padding: 0;
`;

const BackButton = styled(ArrowBackIosIcon)`
  color: gray;
  font-size: 24px;
`;

const BackText = styled.div`
  color: gray;
  font-size: 18px;
`;

// resize on hover
const BackButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: gray;
  display: flex;

  margin: 30px;
  cursor: pointer;
  user-select: none;
`;

const Container = styled.div`
  min-height: 100vh;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  color: black;
`;

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
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
  height: 400px;
  border-radius: 16px;
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const SubText = styled.p`
  font-size: 14px;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
`;

const Information = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 500px;
  background-color: #ececec;
  border-radius: 16px;
  padding: 20px;
`;
