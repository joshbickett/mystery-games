import { useState } from "react";
import "./App.css";
import { Enterance } from "./Enterance";
import { Home } from "./Home";

const App = () => {
  const [entered, setEntered] = useState(true);
  return (
    <div>
      {!entered && <Enterance setEntered={setEntered} />}
      {entered && <Home />}
    </div>
  );
};

export default App;
