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
        <BrandHeader src={BrandLogoImage} alt="mansion" />
        <NavSubText>
          <i>Developed with AI</i>
        </NavSubText>
      </NavContainer>
      <Separator />
      <SplitContainer>
        <SplitLeft style={{ backgroundColor: "black" }}>
          <h3 style={{ fontSize: "25px" }}>
            Discover games to play with family and friends
          </h3>
          <p style={{ padding: 0, margin: 0 }}>
            Enjoy a night of getting into character and solving a mystery.
          </p>
        </SplitLeft>
        <SplitRight style={{ backgroundColor: "#ffffff" }}>
          <CSSTransition in={!isFlipped} timeout={300} classNames="flip">
            <img
              src={heroGame.img}
              alt="enter"
              style={{ width: "100px", borderRadius: "6px", flex: "1" }}
            />
          </CSSTransition>
          <h3 style={{ fontSize: "25px" }}>{heroGame.name}</h3>
          <p style={{ padding: 0, margin: 0 }}>{heroGame.subtext}</p>
        </SplitRight>
      </SplitContainer>
      <Separator />
      <FlexContainer style={{ padding: 10 }}>
        <h1 style={{ margin: 0, marginBottom: "10px" }}>{games[0].name}</h1>
        <p style={{ margin: 0, padding: 0 }}>Meet the players</p>
      </FlexContainer>

      <FlexContainer
        style={{
          flexDirection: "row",
          justifyContent: "left",
          padding: 10,
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
      </FlexContainer>
      <Separator />
      <SplitContainer>
        <SplitLeft style={{ backgroundColor: "#ffffff", color: "black" }}>
          <h1>How it works</h1>
          <p>
            It is kind of like a Murder Mystery Game, but with only the mystery
            part
          </p>
        </SplitLeft>
        <SplitRight style={{ backgroundColor: "#D3D3D3" }}>
          <ul>
            <p>8 players</p>
            <p>Each characters has backstores</p>
            <p>Each characters has a goal to win</p>
            <p>One antagonist (villain)</p>
            <p>A simple chatbot to answer your questions during the game</p>
          </ul>
        </SplitRight>
      </SplitContainer>
    </Container>
  );
};

// opacity just a little
const Container = styled.div`
  min-height: 100vh;
  background-color: #ffffff;

  color: black;
  overflow: hidden;
`;

const NavSubText = styled.p`
  padding: 10px;
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

const Separator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px;
  background-color: #f7cc0c;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background-color: #ffffff;
  color: black;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
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

const BrandHeader = styled.img`
  width: 300px;
  border-radius: 16px;
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
    padding: 25px;
  }
`;
