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
    }, 4000);

    return () => clearInterval(interval);
  }, [isFlipped]);

  return (
    <Container>
      <NavContainer>
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
          <BrandHeader>Mystery Games</BrandHeader>
        </div>
        <NavItemContainer>
          <NavItem>Browse Games</NavItem>
          <NavItem>About</NavItem>
        </NavItemContainer>
      </NavContainer>
      <HeroContainer>
        <HeroLeft>
          <h1>Discover games to play with family and friends</h1>
          <p style={{ padding: 0, margin: 0 }}>
            Enjoy a night of getting into character and solving a mystery.
          </p>
        </HeroLeft>
        <HeroRight>
          <CSSTransition in={!isFlipped} timeout={300} classNames="flip">
            <img
              src={heroGame.img}
              alt="enter"
              style={{ width: "100px", borderRadius: "6px", flex: "1" }}
            />
          </CSSTransition>
          <h1>{heroGame.name}</h1>
        </HeroRight>
      </HeroContainer>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: #353c45;
  color: white;
  overflow: hidden;
`;

const NavItem = styled.h2`
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

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
  background-color: #24292f;
`;

/* style={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 25,
            padding: "10px 50px",
          }} */

const NavItemContainer = styled.div`
  display: flex;
  flexgrow: 1;
  align-items: center;
  justify-content: flex-end;
  gap: 25;
  padding: 10px 50px;
  @media (max-width: 768px) {
    gap: 25;
    padding: 10px 40px;
  }
`;

const BrandHeader = styled.h2`
  user-select: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

// make it flex if mobile
const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 300px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 75px;
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const HeroRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 75px;
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
