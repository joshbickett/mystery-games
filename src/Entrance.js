import { CSSTransition } from "react-transition-group";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import DoorOne from "./images/door-1.jpg";

export const Entrance = ({ setEntered }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  // make an onhover state
  const [wasHovered, setWasHovered] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    if (isFlipped) {
      setTimeout(() => {
        // setEntered(true);
      }, [1000]);
    }
  }, [isFlipped, setEntered]);

  return (
    <Container>
      {wasHovered && (
        <PlayingCardFlipped
          onClick={() => {
            setTimeout(() => {
              setEntered(true);
            }, 100);
          }}
        >
          <h2 style={{ padding: 0, margin: 0 }}>ENTER</h2>
          <p style={{ padding: "20px", margin: 0 }}>
            Discover a world of games and mysteries.
          </p>
        </PlayingCardFlipped>
      )}

      <CSSTransition
        in={!isFlipped}
        timeout={1000}
        classNames="flip"
        unmountOnExit
      >
        <PlayingCard
          src={DoorOne}
          alt="enter"
          onClick={handleFlip}
          onMouseOver={() => {
            setTimeout(() => {
              setWasHovered(true);
            }, 100);

            handleFlip();
          }}
        />
      </CSSTransition>

      <div></div>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  background-color: #ffffff;
  color: black;
  text-align: center;
  overflow: hidden;
`;

const PlayingCardFlipped = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #0b0000;
  color: white;
  border-radius: 16px;
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:active {
    background-color: ##5a5a5a;
  }
`;

const PlayingCard = styled.img`
  height: 500px;
  border-radius: 16px;
`;

/*  <div>
            <br />
            <br />
            <p>Gather family or friends for some fun!</p>
            <br />
            <p>Leave the screen behind and play live</p>
            <br />
            <br />
            <br />
            <p>Try something different</p>
          </div> */

/*  <div>
            <p>Play a murder mystery game</p>
            <br />
            <br />
            <br />
            <br />
            <p>Many games available!</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>Enter now to browse</p>
          </div> */
