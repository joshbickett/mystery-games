import { CSSTransition } from "react-transition-group";
import { getMansionImage } from "./utils/rss/imageManager";
import { useState } from "react";
import "./App.css";

const App = () => {
  const img = getMansionImage();
  const [isFlipped, setIsFlipped] = useState(true);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="App">
      <header className="App-header">
        <CSSTransition
          in={isFlipped}
          timeout={300}
          classNames="flip"
          unmountOnExit
        >
          <img
            src={img}
            alt="enter"
            style={{ width: "400px", borderRadius: "6px" }}
          />
        </CSSTransition>

        <div className="App-link" onClick={handleFlip}>
          Enter
        </div>
      </header>
    </div>
  );
};

export default App;
