import styled from "@emotion/styled";

export const CharacterDetail = ({ character }) => {
  return (
    <Container>
      <HeaderContainer>
        <Header>{character.name}</Header>
        <SubHeader>{character.description}</SubHeader>
      </HeaderContainer>

      <CharacterImg src={character.img} alt={character.name} />

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
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  background-color: #ffffff;
  color: black;
  text-align: center;
  overflow: hidden;
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
  height: 300px;
  border-radius: 16px;
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
