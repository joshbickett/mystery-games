import { useCallback, useEffect, useState } from "react";
import KeyImg from "./images/key-5.jpeg";
import BrandLogoImage from "./images/brand-logo.png";
import { CSSTransition } from "react-transition-group";
import { getGames, getCharacters } from "./utils/rss/gamesManager";
import OperaCharacterOneImg from "./images/character-1.jpeg";
import OperaCharacterTwoImg from "./images/character-2.jpeg";
import CityImg from "./images/city.jpeg";
import DoorImg from "./images/door-to-no-where.jpeg";
import styled from "@emotion/styled";

const games = getGames();
const characters = getCharacters();
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
          Developed in partnership between Humans and AI (HI & AI)
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
        <SplitRight style={{ backgroundColor: "#ffffff", padding: 20 }}>
          <CSSTransition in={!isFlipped} timeout={300} classNames="flip">
            <img
              src={heroGame.img}
              alt="enter"
              style={{ width: "150px", borderRadius: "6px", flex: "1" }}
            />
          </CSSTransition>
          <h3 style={{ fontSize: "25px", padding: 0, margin: 10 }}>
            {heroGame.name}
          </h3>
          <p style={{ padding: 0, margin: 0, textAlign: "center" }}>
            {heroGame.subtext}
          </p>
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
          alignItems: "flex-start",
          flexWrap: "wrap",
          padding: 5,
        }}
      >
        {characters.map((character, index) => {
          return (
            <CharacterContainer>
              <CharacterImage src={character.img} alt={`char${index}`} />
              <InnerCharacterContainer>
                <h4 style={{ textAlign: "center", margin: 5 }}>
                  {character.name}
                </h4>
                <p style={{ textAlign: "center", margin: 0 }}>
                  {character.description}
                </p>
              </InnerCharacterContainer>
            </CharacterContainer>
          );
        })}
      </FlexContainer>
      <Separator />
      <SplitContainer style={{ gridTemplateColumns: "1fr 2fr" }}>
        <SplitLeft style={{ backgroundColor: "#ffffff", color: "black" }}>
          <h1>How it works</h1>
          <p>
            It is kind of like a Murder Mystery Game, but with only the mystery
            part
          </p>
        </SplitLeft>
        <SplitRight
          style={{
            backgroundColor: "#f9f9f9",
            flexDirection: "row",
            padding: "25px",
          }}
        >
          <DoorImage src={DoorImg} alt="door" />

          <div style={{ padding: "15px" }}>
            <UnderlineP>8 players</UnderlineP>
            <UnderlineP>Each character has a backstores</UnderlineP>
            <UnderlineP>Everyone tries to win</UnderlineP>
            <UnderlineP>One mystery with an antagonist (villain)</UnderlineP>
            <UnderlineP>Choose one game master</UnderlineP>
          </div>
        </SplitRight>
      </SplitContainer>
      <Separator />
      <SplitContainer>
        <SplitRight
          style={{
            backgroundColor: "black",
            color: "white",
            paddingBottom: 100,
          }}
        >
          <h3>Sign up to learn more</h3>
          <p>Learn more </p>
          <input type="text" placeholder="Email" />
          {/* <CallToActionButton>GET THE GAME</CallToActionButton> */}
        </SplitRight>

        <SplitLeft
          style={{
            backgroundColor: "black",
            color: "white",
            paddingBottom: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>COMING SOON</h2>
          <img
            src={CityImg}
            alt="mansion"
            style={{ width: 300, borderRadius: "8px" }}
          />
        </SplitLeft>
      </SplitContainer>
      <FlexContainer
        style={{
          backgroundColor: "black",
          color: "white",
          flexDirection: "row",
        }}
      >
        <div style={{ fontSize: "10px", padding: "10px" }}>
          Copyright © mysterygames.io 2023
        </div>
      </FlexContainer>
    </Container>
  );
};

const DoorImage = styled.img`
  width: 250px;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 175px;
  }
`;

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
  width: 250px;
  min-height: 400px;
  @media (max-width: 768px) {
    width: 175px;
    min-height: 330px;
  }
`;

const InnerCharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const CharacterImage = styled.img`
  width: 200px;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 150px;
  }
`;

// opacity just a little
const Container = styled.div`
  min-height: 100vh;
  background-color: #ffffff;

  color: black;
  overflow: hidden;
`;

const CallToActionButton = styled.div`
  cursor: pointer;
  margin: 15px;
  font-size: 25px;
  padding: 10px 40px;
  background-color: #ececec;
  color: black;
  border-radius: 15px;
  user-select: none;
  &:hover {
    background-color: black;
    color: white;
  }
  &:active {
    scale: 1.02;
  }
`;

const UnderlineP = styled.p`
  font-size: 16px;
  text-align: left;
  margin: 30px 0;
`;

const NavSubText = styled.p`
  padding: 10px;
  text-align: center;
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
  background-color: #ffffff;
  color: black;
  @media (max-width: 768px) {
    flex-direction: column;
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
