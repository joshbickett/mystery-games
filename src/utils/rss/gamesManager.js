import MansionOne from "../../images/mansion-1.jpeg";
import MansionTwo from "../../images/mansion-2.jpeg";
import MansionThree from "../../images/mansion-3.jpeg";
import MansionFour from "../../images/mansion-4.jpeg";
import MansionFive from "../../images/mansion-5.jpeg";

// const gameArray = [
//   "Night at the Opera",
//   "An evening in 2142",
//   "Pirates game",
//   "1920s funnies",
// ];

export const getMansionImage = () => {
  const array = [
    MansionOne,
    MansionTwo,
    MansionThree,
    MansionFour,
    MansionFive,
  ];
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const getGames = () => {
  console.log("get games");
  return [
    { name: "Night at the Opera", img: MansionOne, subtext: "Available now!" },
    {
      name: "Additional Games",
      img: MansionTwo,
      subtext: "Coming soon",
    },
  ];
};
