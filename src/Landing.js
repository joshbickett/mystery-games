import { useState } from "react";
import { Entrance } from "./Entrance";
import { LandingDetail } from "./LandingDetail";

export const Landing = () => {
  const [entered, setEntered] = useState(false);
  return (
    <div>
      {entered ? <LandingDetail /> : <Entrance setEntered={setEntered} />}
    </div>
  );
};
