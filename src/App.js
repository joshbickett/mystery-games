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
        <div className="App-subheader"> here </div>
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
        <div className="App-subheader "> here </div>
      </header>
    </div>
  );
};

export default App;
