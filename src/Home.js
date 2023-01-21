import { useCallback, useEffect, useState } from "react";
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
    "1920s funnies",
  ];

  const handleFlip = async () => {
    console.log("handle flip");
    // setIsFlipped(!isFlipped);

    setIsFlipped(!isFlipped);
    setTimeout(async () => {
      await handleFlip();
    }, 4000);
    // setTimeout(() => {
    //   setIsFlipped(false);
    //   handleFlip();
    // }, [2000]);

    // setTimeout(() => {
    //   handleFlip();
    // }, [2000]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(!isFlipped);
      const newImg = getMansionImage();
      const randomGame = Math.random() > 0.5 ? 0 : Math.random() > 0.5 ? 1 : 2;
      console.log("random game", randomGame);
      setTimeout(() => {
        setImg(newImg);

        setHeroGame(randomGame);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [isFlipped]);

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
              style={{ width: "100px", borderRadius: "6px", flex: "1" }}
            />
          </CSSTransition>
          <h1>{gameArray[heroGame]}</h1>
        </div>
      </div>
    </div>
  );
};
