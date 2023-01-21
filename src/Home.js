import { useState } from "react";
import MansionImg from "./images/mansion-1.jpeg";
import { CSSTransition } from "react-transition-group";
import { getMansionImage } from "./utils/rss/imageManager";

export const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [img, setImg] = useState(getMansionImage());
  const [heroGame, setHeroGame] = useState(0);
  const gameArray = [
    "Night at the Opera",
    "An evening in 2142",
    "Pirates game",
  ];

  const handleFlip = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      const newImg = getMansionImage();
      setImg(newImg);
      const randomGame = Math.random() > 0.5 ? 0 : Math.random() > 0.5 ? 1 : 2;
      console.log("random game", randomGame);
      setHeroGame(randomGame);
    }
    setTimeout(() => {
      setIsFlipped(false);
    }, [4000]);
  };
  return (
    <div className="main">
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: 20,
          backgroundColor: "#24292f",
        }}
      >
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 25,
            padding: "10px",
          }}
        >
          <img
            src={MansionImg}
            alt="mansion"
            style={{ width: "100px", borderRadius: "6px" }}
          />
          <h2 style={{ userSelect: "none", cursor: "pointer" }}>
            Mystery Games
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 25,
            padding: "10px 50px",
          }}
        >
          <h2 className="nav-items">Browse Games</h2>
          <h2 className="nav-items">About</h2>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          height: "250px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            padding: "75px",
          }}
        >
          <h1>Discover games to play with family and friends</h1>
          <p style={{ padding: 0, margin: 0 }}>
            Enjoy a night of getting into character and solving a mystery.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "75px",
          }}
        >
          <CSSTransition in={!isFlipped} timeout={300} classNames="flip">
            <img
              src={img}
              alt="enter"
              onMouseOver={handleFlip}
              style={{ width: "100px", borderRadius: "6px", flex: "1" }}
            />
          </CSSTransition>
          <h1>{gameArray[heroGame]}</h1>
        </div>
      </div>
    </div>
  );
};
