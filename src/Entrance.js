import { CSSTransition } from "react-transition-group";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import DoorOne from "./images/door-1.jpg";
import PlayingCardOne from "./images/playing-card-1.jpg";

export const Entrance = ({ setEntered }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  // make an onhover state
  const [wasHovered, setWasHovered] = useState(false);

  useEffect(() => {
    // if mobile fire code below
    if (window.innerWidth < 768) {
      setTimeout(() => {
        setTimeout(() => {
          setWasHovered(true);
        }, 100);

        handleFlip();
      }, 300);
    }
  }, []);

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
          style={{
            backgroundImage: `url(${PlayingCardOne})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h3 style={{ padding: 0, margin: 0 }}>CLICK TO ENTER</h3>
          <p style={{ padding: "10px", margin: 0 }}>
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
          onMouseOver={() => {
            setTimeout(() => {
              setWasHovered(true);
            }, 100);

            handleFlip();
          }}
          onMouseDown={() => {
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
  transform: translate(-50%, -50%) scale(1);
  background-color: #0b0000;
  color: white;
  border-radius: 16px;
  width: 335px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  &:active {
    transform: translate(-50%, -50%) scale(1.05);
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
