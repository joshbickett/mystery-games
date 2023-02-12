import { useState } from "react";
import "./App.css";
import { Entrance } from "./Entrance";
import { Home } from "./Home";
import { Payments } from "./Payments";

const App = () => {
  const [entered, setEntered] = useState(false);
  const [showPaymentsPage, setShowPaymentsPage] = useState(false);
  return (
    <div>
      {!entered && !showPaymentsPage && <Entrance setEntered={setEntered} />}
      {entered && !showPaymentsPage && (
        <Home setShowPaymentsPage={setShowPaymentsPage} />
      )}
      {showPaymentsPage && <Payments />}
    </div>
  );
};

export default App;
