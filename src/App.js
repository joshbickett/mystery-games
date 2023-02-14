import { useState } from "react";
import "./App.css";
import { Entrance } from "./Entrance";
import { Game } from "./Game";
import { Home } from "./Home";
import { Payments } from "./Payments";

const App = () => {
  const [entered, setEntered] = useState(false);
  const [showPaymentsPage, setShowPaymentsPage] = useState(false);
  const [showGamePage, setShowGamePage] = useState(false);

  return (
    <div>
      {!entered && !showPaymentsPage && !showGamePage && (
        <Entrance setEntered={setEntered} />
      )}
      {entered && !showPaymentsPage && !showGamePage && (
        <Home setShowPaymentsPage={setShowPaymentsPage} />
      )}
      {showPaymentsPage && !showGamePage && (
        <Payments setShowGamePage={setShowGamePage} />
      )}
      {showGamePage && !showPaymentsPage && <Game />}
    </div>
  );
};

export default App;
