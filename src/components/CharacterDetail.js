import styled from "@emotion/styled";

export const CharacterDetail = ({ character }) => {
  return (
    <Container>
      <h1>{character.name}</h1>
      <CharacterImg src={character.img} alt={character.name} />
      <h4>{character.description}</h4>
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

const CharacterImg = styled.img`
  height: 300px;
  border-radius: 16px;
`;
