import DoorOne from "../../images/door-1.jpg";
import DoorTwo from "../../images/door-2.jpg";
import DoorThree from "../../images/door-3.jpg";
import MansionCardOne from "../../images/mansion-card-1.jpeg";
import WesternCharacterOne from "../../images/character-1.jpeg";
import WesternCharacterTwo from "../../images/character-2.jpeg";
import WesternCharacterThree from "../../images/character-3.jpeg";
import WesternCharacterFour from "../../images/character-4.jpeg";
import WesternCharacterFive from "../../images/character-5.jpeg";
import WesternCharacterSix from "../../images/character-6.jpeg";
import WesternCharacterSeven from "../../images/character-7.jpeg";
import WesternCharacterEight from "../../images/character-8.jpeg";

// const gameArray = [
//   "Night at the Opera",
//   "An evening in 2142",
//   "Pirates game",
//   "1920s funnies",
// ];

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
      img: WesternCharacterThree,
    },
    {
      name: "Bob 'bull' Rider",
      description: "Cattle Rancher at Rusty Spur Ranch",
      img: WesternCharacterFour,
    },
    {
      name: "Silver Marshal",
      description: "New Guy at Rusty Spur Ranch",
      img: WesternCharacterFive,
    },
    {
      name: "Ruth Winchester",
      description: "Owner of Winchester Mercantile ",
      img: WesternCharacterSix,
    },
    {
      name: "Rose Sagebrush",
      description: "Reporter at Heart of the West Gazette",
      img: WesternCharacterSeven,
    },
    {
      name: "Sheriff Jerry Hardlaw",
      description: "Local Mondred County Sheriff",
      img: WesternCharacterEight,
    },
  ];
};
