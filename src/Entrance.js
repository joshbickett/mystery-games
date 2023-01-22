import { CSSTransition } from "react-transition-group";
import { getMansionImage } from "./utils/rss/gamesManager";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const texts = ["Text 1", "Text 2", "Text 3"];

export const Entrance = ({ setEntered }) => {
  const [text, setText] = useState("");
  const [top, setTop] = useState("0px");
  const [left, setLeft] = useState("0px");
  const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const randomIndex = Math.floor(Math.random() * texts.length);
  //     const newText = texts[randomIndex];
  //     setText(newText);
  //     setTop(`${Math.floor(Math.random() * (window.innerHeight - 100))}px`);
  //     setLeft(`${Math.floor(Math.random() * (window.innerWidth - 100))}px`);
  //     setVisible(!visible);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [visible]);

  const img = getMansionImage();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    if (isFlipped) {
      setTimeout(() => {
        setEntered(true);
      }, [400]);
    }
  }, [isFlipped, setEntered]);

  return (
    <Container>
      <h2>Enter</h2>

      <CSSTransition
        in={!isFlipped}
        timeout={300}
        classNames="flip"
        unmountOnExit
      >
        <img
          src={img}
          alt="enter"
          style={{ width: "200px", borderRadius: "6px" }}
          onMouseOver={handleFlip}
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
  background-color: #131619;
  color: white;
  text-align: center;
  overflow: hidden;
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
