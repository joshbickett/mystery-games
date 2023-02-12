import { CSSTransition } from "react-transition-group";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import PlayingCardImage from "./images/playing-card-1.jpg";

export const Entrance = ({ setEntered }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    if (isFlipped) {
      setTimeout(() => {
        setEntered(true);
      }, [1000]);
    }
  }, [isFlipped, setEntered]);

  return (
    <Container>
      <PlayingCardOverlay>
        <p style={{ margin: 0, padding: 0 }}>
          Discover a world of games and mysteries.
        </p>
        <h4 style={{ padding: 0, margin: 10, marginBottom: 10 }}>
          CLICK TO ENTER
        </h4>
      </PlayingCardOverlay>

      <CSSTransition
        in={!isFlipped}
        timeout={1000}
        classNames="flip"
        unmountOnExit
      >
        <PlayingCard src={PlayingCardImage} alt="enter" onClick={handleFlip} />
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

/* allow click events to pass through */
const PlayingCardOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  color: white;
  width: 300px;
  height: 515px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  pointer-events: none;
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
