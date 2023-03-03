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
            <h4 style={{ margin: 0, padding: 0 }}>Your Character</h4>
            <Header>{character.name[0]}</Header>
            {character?.antagonist ? (
              <CharacterGuiltDetail style={{ color: "#814141" }}>
                Villian
              </CharacterGuiltDetail>
            ) : (
              <CharacterGuiltDetail style={{ color: "#00008B" }}>
                Innocent
              </CharacterGuiltDetail>
            )}
            <CharacterImg src={character.img} alt={character.name[0]} />
            <SubHeader>{character.description}</SubHeader>
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
                {character?.antagonist ? (
                  <InformationHeader style={{ color: "#814141" }}>
                    DON'T TELL ANYONE
                  </InformationHeader>
                ) : (
                  <InformationHeader>
                    Be careful with who you share this info with
                  </InformationHeader>
                )}

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

const CharacterGuiltDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  gap: 20px;
`;

const InformationHeader = styled.h5`
  margin: 0 5px;
  padding: 0;
  line-height: 1.2;
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
  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
  }
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 5px;
`;

const Header = styled.h1`
  font-size: 24px;
  margin: 0;
  padding: 0;
`;

const SubHeader = styled.h2`
  font-size: 18px;
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
  margin: 0 5px 5px 5px;
`;

const Information = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  max-width: 400px;
  background-color: #ececec;
  border-radius: 16px;
  padding: 20px;
`;
