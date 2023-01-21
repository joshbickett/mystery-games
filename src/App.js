import { useState } from "react";
import "./App.css";
import { Entrance } from "./Entrance";
import { Home } from "./Home";

const App = () => {
  const [entered, setEntered] = useState(false);
  return (
    <div>
      {!entered && <Entrance setEntered={setEntered} />}
      {entered && <Home />}
    </div>
  );
};

export default App;
