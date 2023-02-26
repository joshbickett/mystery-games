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
import CowboysImg from "../../images/cowboys.jpeg";

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

export const getHeros = () => {
  console.log("get games");
  return [
    {
      name: "Stealing Seconds in the Old West",
      img: MansionCardOne,
      subtext: "Try now!",
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
      id: "5c2b919b-6549-480d-b0ab-bb86f6fb2f0c",
    },
    {
      name: "Professor Fate",
      description: "The fortune teller",
      img: WesternCharacterTwo,
      id: "dfa66402-525b-4dd4-8246-0c7d5efcb3a9",
    },
    {
      name: "Al Pacino",
      description: "Alpaca Farmer",
      img: WesternCharacterThree,
      id: "025ec643-f66d-407f-a78a-efd9a9f6a19f",
    },
    {
      name: "Bob 'bull' Rider",
      description: "Cattle Rancher at Rusty Spur Ranch",
      img: WesternCharacterFour,
      id: "b7a32869-0579-4c2f-8f35-220fd5ad340e",
    },
    {
      name: "Silver Marshal",
      description: "New Guy at Rusty Spur Ranch",
      img: WesternCharacterFive,
      id: "cf65eadb-9879-4c4c-8884-82ec3669c560",
    },
    {
      name: "Ruth Winchester",
      description: "Owner of Winchester Mercantile ",
      img: WesternCharacterSix,
      id: "4f040247-2b21-4e62-bcac-6c1e17a89e36",
    },
    {
      name: "Rose Sagebrush",
      description: "Reporter at Heart of the West Gazette",
      img: WesternCharacterSeven,
      id: "45aa3daa-8f19-4b35-907d-d1b60582621b",
    },
    {
      name: "Sheriff Jerry Hardlaw",
      description: "Local County Sheriff",
      img: WesternCharacterEight,
      id: "05290c63-678c-405c-9d3a-6d646b6d018a",
    },
  ];
};
