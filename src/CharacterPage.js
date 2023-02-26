import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCharacters } from "./utils/rss/gamesManager";
import { CharacterDetail } from "./components/CharacterDetail";

const characters = getCharacters();
console.log(characters);

export const CharacterPage = () => {
  const { id } = useParams();
  const character = characters.filter((character) => character.id === id)[0];

  console.log(character);

  // show the character name by getting the character with the id from param
  if (!character) return <div>Character not found</div>;
  else return <CharacterDetail character={character} />;
};
