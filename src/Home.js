import { useCallback, useEffect, useState } from "react";
import KeyImg from "./images/key-5.jpeg";
import BrandLogoImage from "./images/brand-logo.png";
import { CSSTransition } from "react-transition-group";
import { getGames } from "./utils/rss/gamesManager";
import OperaCharacterOneImg from "./images/character-1.jpeg";
import OperaCharacterTwoImg from "./images/character-2.jpeg";
import OperaCharacterThreeImg from "./images/character-3.jpeg";
import styled from "@emotion/styled";

const games = getGames();
let gameIndex = 0;
export const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

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
            src={BrandLogoImage}
            alt="mansion"
            style={{ width: "300px", borderRadius: "16px" }}
          />
        </div>
        {/* <NavItemContainer>
          <NavItem>Browse</NavItem>
          <NavItem>About</NavItem>
        </NavItemContainer> */}
      </NavContainer>
      <SplitContainer>
        <SplitLeft>
          <h1>Discover games to play with family and friends</h1>
          <p style={{ padding: 0, margin: 0 }}>
            Enjoy a night of getting into character and solving a mystery.
          </p>
        </SplitLeft>
        <SplitRight>
          <CSSTransition in={!isFlipped} timeout={300} classNames="flip">
            <img
              src={heroGame.img}
              alt="enter"
              style={{ width: "100px", borderRadius: "6px", flex: "1" }}
            />
          </CSSTransition>
          <h1>{heroGame.name}</h1>
          <p style={{ padding: 0, margin: 0 }}>{heroGame.subtext}</p>
        </SplitRight>
      </SplitContainer>
      <Row style={{ backgroundColor: "#bdb9be" }}>
        <h1 style={{ margin: 0, marginBottom: "10px" }}>{games[0].name}</h1>
        <p style={{ margin: 0, padding: 0 }}>Meet the players</p>
      </Row>
      <SplitContainer>
        <SplitLeft
          style={{
            backgroundColor: "#fbfbfb",
            color: "black",
            flexDirection: "row",
            justifyContent: "left",
          }}
        >
          <div>
            <img
              src={OperaCharacterOneImg}
              alt="opera"
              style={{ width: "200px", borderRadius: "6px" }}
            />
            <div style={{ padding: "10px" }}>
              <h2>Jeromy Tim</h2>
              <p>He's the main character</p>
            </div>
          </div>
          <div style={{ margin: "10px" }}>
            <img
              src={OperaCharacterTwoImg}
              alt="opera"
              style={{ width: "200px", borderRadius: "6px" }}
            />
            <div style={{ padding: "10px" }}>
              <h2>Pat patrick</h2>
              <p>He's another character</p>
            </div>
          </div>
        </SplitLeft>
        <SplitRight></SplitRight>
      </SplitContainer>
    </Container>
  );
};

// opacity just a little
const Container = styled.div`
  min-height: 100vh;
  background-color: #fbfbfb;

  color: black;
  overflow: hidden;
`;

/*style={{ margin: "10px" }} */
const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const NavItem = styled.h2`
  cursor: pointer;
  padding: 10px 40px;

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

const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  width: 100%;
`;

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
  background-color: #0e0a0e;
  color: white;
`;

const NavItemContainer = styled.div`
  display: flex;
  flexgrow: 1;
  align-items: center;
  justify-content: flex-end;
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
const SplitContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const SplitLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 75px;
  background-color: #3e3a3e;
  color: white;
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const SplitRight = styled.div`
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
