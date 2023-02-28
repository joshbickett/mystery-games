import styled from "@emotion/styled";

export const CharacterDetail = ({ character }) => {
  return (
    <Container>
      <h1>{character.name}</h1>
      <CharacterImg src={character.img} alt={character.name} />
      <h4>{character.description}</h4>
      {character.shareable && <h5>Info you’re free to share</h5>}

      {character.shareable.map((info, id) => {
        return <p key={id}>{info}</p>;
      })}

      {character.trust && (
        <>
          <h5>Things to share with only those you trust</h5>
          {character?.trust?.map((info, id) => {
            return <p key={id}>{info}</p>;
          })}
        </>
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

const CharacterImg = styled.img`
  height: 300px;
  border-radius: 16px;
`;
