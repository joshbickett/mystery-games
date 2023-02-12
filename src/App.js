import { useState } from "react";
import "./App.css";
import { Entrance } from "./Entrance";
import { Home } from "./Home";

const App = () => {
  const [entered, setEntered] = useState(false);
  const [showPaymentsPage, setShowPaymentsPage] = useState(false);
  return (
    <div>
      {!entered && !showPaymentsPage && <Entrance setEntered={setEntered} />}
      {entered && !showPaymentsPage && (
        <Home setShowPaymentsPage={setShowPaymentsPage} />
      )}
      {showPaymentsPage && <div>Payments Page</div>}
    </div>
  );
};

export default App;
