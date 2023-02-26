import { useParams } from "react-router-dom";

export const CharacterPage = () => {
  // on initial page render grab the id from the get params and put it in a variable
  const id = useParams().id;
  console.log(id);

  return <div>Game Character</div>;
};
