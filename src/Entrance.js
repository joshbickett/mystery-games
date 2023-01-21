import { CSSTransition } from "react-transition-group";
import { getMansionImage } from "./utils/rss/gamesManager";
import { useEffect, useState } from "react";

export const Entrance = ({ setEntered }) => {
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
    <div className="enter-container">
      <div className="subheader">
        {!isFlipped && (
          <div>
            <br />
            <br />
            <p>Gather family or friends for some fun!</p>
            <br />
            <p>Leave the screen behind and play live</p>
            <br />
            <br />
            <br />
            <p>Try something different</p>
          </div>
        )}
      </div>

      <CSSTransition
        in={!isFlipped}
        timeout={300}
        classNames="flip"
        unmountOnExit
      >
        <img
          src={img}
          alt="enter"
          style={{ width: "400px", borderRadius: "6px", flex: "1" }}
        />
      </CSSTransition>

      {!isFlipped && (
        <div className="App-link" onClick={handleFlip}>
          ENTER
        </div>
      )}

      <div className="subheader ">
        {!isFlipped && (
          <div>
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
          </div>
        )}
      </div>
    </div>
  );
};
