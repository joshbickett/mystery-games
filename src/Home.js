import { useCallback, useEffect, useState } from "react";
import MansionImg from "./images/mansion-1.jpeg";
import { CSSTransition } from "react-transition-group";
import { getMansionImage, getGames } from "./utils/rss/gamesManager";
import styled from "@emotion/styled";

const games = getGames();
let gameIndex = 0;
export const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [img, setImg] = useState(getMansionImage());

  const [heroGame, setHeroGame] = useState(games[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(!isFlipped);

      setTimeout(() => {
        if (gameIndex < games.length - 1) gameIndex += 1;
        else gameIndex = 0;
        console.log("game index", gameIndex);
        const newHeroGame = games[gameIndex];
        console.log("new hero game", newHeroGame);
        setHeroGame(newHeroGame);
      }, 250);
    }, 2000);

    return () => clearInterval(interval);
  }, [isFlipped]);

  return (
    <Container>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: 20,
          backgroundColor: "#24292f",
        }}
      >
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 25,
            padding: "10px",
          }}
        >
          <img
            src={MansionImg}
            alt="mansion"
            style={{ width: "100px", borderRadius: "6px" }}
          />
          <h2 style={{ userSelect: "none", cursor: "pointer" }}>
            Mystery Games
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 25,
            padding: "10px 50px",
          }}
        >
          <NavItem>Browse Games</NavItem>
          <NavItem>About</NavItem>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          height: "250px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            padding: "75px",
          }}
        >
          <h1>Discover games to play with family and friends</h1>
          <p style={{ padding: 0, margin: 0 }}>
            Enjoy a night of getting into character and solving a mystery.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "75px",
          }}
        >
          <CSSTransition in={!isFlipped} timeout={300} classNames="flip">
            <img
              src={heroGame.img}
              alt="enter"
              style={{ width: "100px", borderRadius: "6px", flex: "1" }}
            />
          </CSSTransition>
          <h1>{heroGame.name}</h1>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: #353c45;
  color: white;
  overflow: hidden;
`;

const NavItem = styled.div`
  cursor: pointer;
  padding: 10px;

  color: white;
  border-radius: 15px;
  user-select: none;
  &:hover {
    background-color: black;
  }
  &:active {
    scale: 1.02;
  }
`;
