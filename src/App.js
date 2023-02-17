import { useEffect, useState } from "react";
import "./App.css";
import { Entrance } from "./Entrance";
import { Game } from "./Game";
import { Home } from "./Home";
import { Payments } from "./Payments";

const App = () => {
  const [showEntrance, setShowEntrance] = useState(true);
  const [showPaymentsPage, setShowPaymentsPage] = useState(false);
  const [showGamePage, setShowGamePage] = useState(false);
  const [showHome, setShowHome] = useState(false);
  useEffect(() => {
    if (!showEntrance) {
      setShowHome(true);
      setShowGamePage(false);
      setShowPaymentsPage(false);
    }
  }, [showEntrance]);

  useEffect(() => {
    if (!showHome) {
      setShowPaymentsPage(true);
    }
  }, [showHome]);

  useEffect(() => {
    console.log("show game page");
    if (!showPaymentsPage) {
      setShowGamePage(true);
    }
  }, [showPaymentsPage]);

  return (
    <div>
      {showEntrance && <Entrance setShowEntrance={setShowEntrance} />}
      {showHome && <Home setShowHome={setShowHome} />}
      {showPaymentsPage && (
        <Payments setShowPaymentsPage={setShowPaymentsPage} />
      )}
      {showGamePage && <Game />}
    </div>
  );
};

export default App;
