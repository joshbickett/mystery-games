import { useEffect, useState } from "react";

import BrandLogoImage from "./images/brand-logo.png";
import { CSSTransition } from "react-transition-group";
import { getHeros, getCharacters } from "./utils/rss/gamesManager";
import CityImg from "./images/city.jpeg";
import DoorImg from "./images/door-to-no-where.jpeg";
import styled from "@emotion/styled";

import { useNavigate } from "react-router-dom";
import { Characters } from "./components/Characters";
import {
  SplitContainer,
  SplitLeft,
  SplitRight,
} from "./components/StyledComponents";

const heros = getHeros();

let heroIndex = 0;
export const LandingDetail = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  const [heroGame, setHeroGame] = useState(heros[0]);

  const navigateToPayment = () => {
    navigate("/payments");
  };

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
      </NavContainer>

      <SplitContainer>
        <SplitLeft style={{ backgroundColor: "black" }}>
          <h3 style={{ fontSize: "25px", margin: 0, marginBottom: 15 }}>
            Discover the mystery with Family and Friends
          </h3>
          <p style={{ padding: 0, margin: 0 }}>
            Host a game night and get into character.
          </p>
        </SplitLeft>
        <SplitRight
          style={{
            backgroundColor: "black",
            color: "white",
            padding: 20,
            minHeight: "300px",
          }}
        >
          <CSSTransition in={!isFlipped} timeout={300} classNames="flip">
            <MainCardImage
              src={heroGame.img}
              alt="enter"
              onClick={navigateToPayment}
            />
          </CSSTransition>
          <h3
            style={{
              fontSize: "25px",
              padding: 0,
              margin: 10,
              textAlign: "center",
            }}
            onClick={navigateToPayment}
          >
            {heroGame.name}
          </h3>
          <p
            style={{ padding: 0, margin: 0, textAlign: "center" }}
            onClick={navigateToPayment}
          >
            {heroGame.subtext}
          </p>
        </SplitRight>
      </SplitContainer>

      <FlexContainer style={{ padding: 10 }}>
        <h1 style={{ margin: 0, margin: 10, textAlign: "center" }}>
          Meet the players
        </h1>
      </FlexContainer>
      <Characters preview={true} />

      <SplitContainer style={{ gridTemplateColumns: "1fr 2fr" }}>
        <SplitLeft
          style={{
            backgroundColor: "rgb(236, 236, 236)",
            color: "black",
            padding: "20px 40px",
          }}
        >
          <h1 style={{ padding: 0, margin: "10px 0" }}>What is it?</h1>
          <p style={{ margin: "10px 0", lineHeight: "25px" }}>
            Mystery games are role-playing games where there is a mystery to be
            solved. There is a villain in the group and the players have to
            figure out who it is.
          </p>
          <p style={{ margin: "10px 0", lineHeight: "25px" }}>
            It is kind of like a Murder Mystery Game, but with only the mystery
            part.
          </p>
        </SplitLeft>
        <SplitRightRow
          style={{
            backgroundColor: "#f9f9f9",
            padding: "25px",
          }}
        >
          <DoorImage src={DoorImg} alt="door" />

          <div style={{ padding: "15px" }}>
            <DescriptionContainer>
              <DescriptionHeader>Find 8 friends to play</DescriptionHeader>
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
                Dress up and get into character
              </DescriptionHeader>
              <DescriptionSubText>
                Get creative with your costume and character
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
        </SplitRightRow>
      </SplitContainer>
      <Separator />
      <SplitContainer>
        <SplitRight
          style={{
            backgroundColor: "black",
            color: "white",
            paddingBottom: 0,
          }}
        >
          <CallToActionButton onClick={navigateToPayment}>
            GET THE GAME
          </CallToActionButton>
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
          <h2 onClick={navigateToPayment} style={{ textAlign: "center" }}>
            {heros[0].name}
          </h2>
          <LastCatchImage
            src={CityImg}
            alt="mansion"
            onClick={navigateToPayment}
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

const MainCardImage = styled.img`
  width: 150px;
  height: 225px;
  border-radius: 6px;
  flex: 1;
  &:hover {
    transform: scale(1.1);
  }
`;

const LastCatchImage = styled.img`
  width: 300px;
  border-radius: 8px;
  &:hover {
    transform: scale(1.05);
  }
`;

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
  width: 100%;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const DescriptionHeader = styled.p`
  font-size: 16px;
  margin: 0;
  font-weight: 600;
  width: 100%;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
`;

// opacity just a little
const Container = styled.div`
  min-height: 100vh;
  background-color: #ffffff;

  color: black;
  overflow: hidden;
`;

const CallToActionButton = styled.button`
  cursor: pointer;
  margin: 15px;
  font-size: 35px;
  padding: 10px 40px;
  background-color: #ececec;
  color: black;
  border-radius: 15px;
  user-select: none;
  border: none;
  &:hover {
    background-color: black;
    color: white;
  }
  &:active {
    scale: 1.1;
  }
`;

const NavSubText = styled.p`
  padding: 10px;
  text-align: center;
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
  background-color: rgb(249, 249, 249);

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

// // make it flex if mobile
// const SplitContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;

//   @media (max-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     height: 100%;
//   }
// `;

// const SplitLeft = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   flex-direction: column;
//   align-items: flex-start;
//   padding: 25px 75px;
//   color: white;
//   @media (max-width: 768px) {
//     align-items: center;
//     text-align: center;
//   }
// `;

// const SplitRight = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 75px;
//   @media (max-width: 768px) {
//     align-items: center;
//     text-align: center;
//     padding: 25px;
//   }
// `;

const SplitRightRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 75px;
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    padding: 25px;
  }
`;
