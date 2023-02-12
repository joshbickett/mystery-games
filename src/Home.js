import { useCallback, useEffect, useState } from "react";

import BrandLogoImage from "./images/brand-logo.png";
import { CSSTransition } from "react-transition-group";
import { getHeros, getCharacters } from "./utils/rss/gamesManager";
import CityImg from "./images/city.jpeg";
import DoorImg from "./images/door-to-no-where.jpeg";
import styled from "@emotion/styled";

const heros = getHeros();
const characters = getCharacters();

let heroIndex = 0;
export const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const [heroGame, setHeroGame] = useState(heros[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(!isFlipped);

      setTimeout(() => {
        if (heroIndex < heros.length - 1) heroIndex += 1;
        else heroIndex = 0;
        console.log("game index", heroIndex);
        const newHeroGame = heros[heroIndex];
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
        <SplitRight
          style={{
            backgroundColor: "#ffffff",
            padding: 20,
            minHeight: "300px",
          }}
        >
          <CSSTransition in={!isFlipped} timeout={300} classNames="flip">
            <img
              src={heroGame.img}
              alt="enter"
              style={{
                width: "150px",
                maxHeight: "225px",
                borderRadius: "6px",
                flex: "1",
              }}
            />
          </CSSTransition>
          <h3
            style={{
              fontSize: "25px",
              padding: 0,
              margin: 10,
              textAlign: "center",
            }}
          >
            {heroGame.name}
          </h3>
          <p style={{ padding: 0, margin: 0, textAlign: "center" }}>
            {heroGame.subtext}
          </p>
        </SplitRight>
      </SplitContainer>
      <Separator />
      <FlexContainer style={{ padding: 10 }}>
        <h1 style={{ margin: 0, marginBottom: "10px", textAlign: "center" }}>
          {heros[0].name}
        </h1>
        <p style={{ margin: 0, padding: 0, textAlign: "center" }}>
          Meet the players
        </p>
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
        <SplitLeft
          style={{ backgroundColor: "#ffffff", color: "black", padding: 40 }}
        >
          <h1 style={{ padding: 0, margin: "10px 0" }}>What is it?</h1>
          <p style={{ margin: "10px 0", lineHeight: "25px" }}>
            Mystery games are role-playing games where players evaluate the
            other players and clues to solve a mystery.
          </p>
          <p style={{ margin: "10px 0", lineHeight: "25px" }}>
            It is kind of like a Murder Mystery Game, but with only the mystery
            part.
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
            <DescriptionContainer>
              <DescriptionHeader>Find 8 players</DescriptionHeader>
              <DescriptionSubText>
                Each get a role with a strategy to win
              </DescriptionSubText>
            </DescriptionContainer>
            <DescriptionContainer>
              <DescriptionHeader>
                Each character has a backstores
              </DescriptionHeader>
              <DescriptionSubText>
                Pay attention to other players backstories because the may have
                clues
              </DescriptionSubText>
            </DescriptionContainer>
            <DescriptionContainer>
              <DescriptionHeader>
                Solve the mystery and discover the villain
              </DescriptionHeader>
              <DescriptionSubText>
                Each game has one villain and a mystery to be solved
              </DescriptionSubText>
            </DescriptionContainer>
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
          <h2>Try it!</h2>

          <CallToActionButton>GET THE GAME</CallToActionButton>
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
          <h2>Do you have mystery solving skills?</h2>
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

const DescriptionSubText = styled.p`
  margin: 0;
  padding: 5px 0;
  font-size: 12px;
  text-align: left;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
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

const DescriptionHeader = styled.p`
  font-size: 16px;
  text-align: left;
  margin: 0;
  font-weight: 600;
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
