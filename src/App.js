import { CSSTransition } from "react-transition-group";
import { getMansionImage } from "./utils/rss/imageManager";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [img, setImg] = useState(getMansionImage());
  const [isFlipped, setIsFlipped] = useState(true);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-subheader">
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
        <CSSTransition
          in={isFlipped}
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

        {isFlipped && (
          <div className="App-link" onClick={handleFlip}>
            ENTER
          </div>
        )}
        <div className="App-subheader ">
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
      </header>
    </div>
  );
};

export default App;
