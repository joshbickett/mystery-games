import MansionOne from "../../images/mansion-1.jpeg";
import MansionTwo from "../../images/mansion-2.jpeg";
import MansionThree from "../../images/mansion-3.jpeg";
import MansionFour from "../../images/mansion-4.jpeg";
import MansionFive from "../../images/mansion-5.jpeg";
import DoorOne from "../../images/door-1.jpg";
import DoorTwo from "../../images/door-2.jpg";
import DoorThree from "../../images/door-3.jpg";
import MansionCardOne from "../../images/mansion-card-1.jpeg";
import WesternCharacterOne from "../../images/western-character-1.jpeg";
import WesternCharacterTwo from "../../images/western-character-2.jpeg";

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

export const getDoorImage = () => {
  const array = [DoorOne, DoorTwo, DoorThree];
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const getGames = () => {
  console.log("get games");
  return [
    {
      name: "Stealing Seconds in the Old West",
      img: MansionCardOne,
      subtext: "Coming soon",
    },
    {
      name: "You get a role",
      img: WesternCharacterOne,
      subtext: "Try to solve the mystery to win the game.",
    },
  ];
};

export const getCharacters = () => {
  return [
    {
      name: "Wyatt Clockwise",
      description: "A mysterious traveler",
      img: WesternCharacterOne,
    },
    {
      name: "Professor Fate",
      description: "The fortune teller",
      img: WesternCharacterTwo,
    },
    {
      name: "Al Pacino",
      description: "Alpaca Farmer",
      img: WesternCharacterOne,
    },
    {
      name: "Bob 'bull' Rider",
      description: "Cattle Rancher at Rusty Spur Ranch",
      img: WesternCharacterTwo,
    },
    {
      name: "Silver Marshal",
      description: "New Guy at Rusty Spur Ranch",
      img: WesternCharacterOne,
    },
    {
      name: "Ruth Winchester",
      description: "Owner of Winchester Mercantile ",
      img: WesternCharacterTwo,
    },
    {
      name: "Jimmy Cloud",
      description: "Telegram Delivery Boy",
      img: WesternCharacterOne,
    },
    {
      name: "Rose Sagebrush",
      description: "Reporter at Heart of the West Gazette",
      img: WesternCharacterOne,
    },
    {
      name: "Sheriff Jerry Hardlaw",
      description: "Local Mondred County Sheriff",
      img: WesternCharacterOne,
    },

    {
      name: "Terry Sharp",
      description: "Mysterious Traveler",
      img: WesternCharacterOne,
    },
  ];
};
