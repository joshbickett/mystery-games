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
      name: ["Professor Fate"],
      description: "The fortune teller",
      img: WesternCharacterTwo,
      id: "dfa66402-525b-4dd4-8246-0c7d5efcb3a9",
      shareable: [
        "Your fortune-telling powers allow your to answer 1 yes/no question from everyone here in town",
      ],
    },
    {
      name: ["Al Pacino", "Ally Pachino"],
      description: "Alpaca Farmer",
      img: WesternCharacterThree,
      id: "025ec643-f66d-407f-a78a-efd9a9f6a19f",
      shareable: [
        "You are a former cattle rancher turned alpaca raiser.",
        "Several years ago you were able to retire early from cattle ranching after stumbling upon a gold nugget the size of a large potato while taking your horse to drink at the edge of a nearby river.",
        "Now you run an alpaca farm as a hobby and spin the finest alpaca wool in the West. You have donated your remaining fortunes to a horse rescue a few towns east.",
        "You are headed to the Winchester Mercantile to deliver some wool.",
      ],
      trust: [
        "Lately, you’ve heard some rumors from your neighbors at Rusty Spur Ranch about their horse Bucky - something about him being a money pit.",
        "On your way into town, you saw a traveler in strange clothes appearing almost out of thin air near the woods.",
      ],
    },
    {
      name: ["Bobbie 'bull' Rider"],
      description: "Cattle Rancher at Rusty Spur Ranch",
      img: WesternCharacterFour,
      id: "b7a32869-0579-4c2f-8f35-220fd5ad340e",
      shareable: [
        "You’re the most lucrative rancher in the region, and you believe the town is only as prosperous as it is because of your efforts.",
        "Much of the prestige of your ranch comes from your prized stallion, Bucky.",
        "You headed to the local Winchester Mercantile to gather some supplies with your righthand man on the ranch, Tex Ace.",
        "You’re debating if it was wise to leave the new cowboy, Silver Marshal, alone to watch over the ranch…oh well!",
      ],
      trust: [
        "You and Tex Ace have been at odds lately. You believed in a more hands-on approach, wanting to keep a close eye on the cattle. However, Tex was more of a free spirit, preferring to let the cattle roam and trusting in their instincts",
      ],
    },
    {
      name: ["Tex Ace"],
      description: "Cowboy",
      img: WesternCharacterFive,
      id: "cf65eadb-9879-4c4c-8884-82ec3669c560",
      shareable: [
        "You are the righthand man at Rusty Spur Ranch",
        "You have noticed your neighbor, Al Pacino the Alpaca Farmer, has been snooping around.",
        "You are training the new cowboy, Silver Marshal, and you left him in charge while you and Rancher Rusty Spur pick up supplies at the Winchester Mercantile today.",
      ],
      antagonist: true,
      trust: [
        "You’ve done it, don’t get caught!!!",
        "Who => You stole, Bucky, the once prized stallion from Rusty Spur Ranch.",
        "Why => Money! Bucky's sale could set you up well to start over in another town. ",
        "How => You made a deal with a horse acquirer a few towns east to buy Buck for a pretty penny. You received a telegram that the horse rescue is on its way. You used home made horse tranquilizer, to put Bucky to sleep and make the sale later today.",
        "You are hoping to pin the horse disappearance on other suspicious townsfolk. ",
        "You and Bob 'bull' Rider have been at odds lately. You believed in a free spirit approach, by letting the cattle roam and trusting in their instincts while Bob wants to keep a close eye on the cattle",
      ],
    },
    {
      name: ["Silver Marshal"],
      description: "New Guy at Rusty Spur Ranch",
      img: WesternCharacterFive,
      id: "cf65eadb-9879-4c4c-8884-82ec3669c560",
      shareable: [
        "You’re the new guy at Rusty Spur Ranch",
        "Cowboy Tex Ace has been training you. He’s complaining lately Bob 'bull' Rider stick approach of keeping a close eye on cattle and prefers to let the cattle roam and trust in their instincts.",
        "You were incharge of the ranch this morning while Rancher Rusty Spur and Cowboy Tex Ace went into town ",
      ],
      trust: [
        "You noticed your neighbor, Al Pacino the Alpaca Farmer, has been snooping around",
        "When Bucky went missing, you ran to the mercantile so fast that you must have dropped your keys to the ranch somewhere",
      ],
    },
    {
      name: ["Wylie Clockwise"],
      description: "A mysterious traveler",
      img: WesternCharacterOne,
      id: "5c2b919b-6549-480d-b0ab-bb86f6fb2f0c",
      shareable: [
        "You’re a traveler looking for a job.",
        "After a hefty donation to the horse rescue from  a local Alpaca Farm, you are able to purchase horses for rescue",
        "Telegram delivery boy, Leo, has been visiting you quite a bit",
      ],
      trust: [
        "You traveled to 1875 because your great great great grandmother Rose Sagebrush was jailed in 1875. Based on evidence you’ve been collecting in your time travels, you are sure she is innocent. You came to prove her innocence but you are having second thoughts - what if this alters the future too much?! What if you’re never born?!",
        "You’re not sure you want anyone to know you are from the future for it could disrupt the space time continuum…. So you’re trying to blend in with the townspeople and find a job because you’re not sure how long you’ll be stuck here",
        "But first thing first - your time machine is powered by potatoes so you are headed to the mercantile to stock up on potatoes to refuel.",
      ],
    },
    {
      name: ["R. Winchester"],
      description: "Owner of Winchester Mercantile ",
      img: WesternCharacterSix,
      id: "4f040247-2b21-4e62-bcac-6c1e17a89e36",
      shareable: [
        "You own the local mercantile and business is booming as the town is growing quickly",
      ],
      trust: [
        "You’ve been getting some strange special orders lately especially from… many visitors",
        "Wyatt Clockwise, a mysterious traveler who has been buying a lot of potatoes, more than anyone should ever need. Now you are out of potatoes. ",
        "Tex Ace, the cowboy at Rusty Spur Ranch who typically normally buys a lot of hay and carrots, but he's been buying some odd things lately.",
      ],
    },
    {
      name: ["Taylor Sagebrush"],
      description: "Reporter at Heart of the West Gazette",
      img: WesternCharacterSeven,
      id: "45aa3daa-8f19-4b35-907d-d1b60582621b",
      shareable: [
        "You are a Reporter at Heart of the West Gazette, the town newspaper ",
        "You clearly need the help - you have misplaced your journal that contains very important notes and story ideas",
        "Today you are heading to the Winchester Mercantile to buy a new journal and hope you run into some of the travelers to conduct some interviews for the paper",
      ],
      trust: [
        "You are writing a juicy tale to expose something fishy going on at Rusty Spur Ranch. ",
        "You were able to intercept a telegram from Rusty Spur Ranch, so you snuck into the barn at ranch in the wee hours of the morning to investigate. When you got there you didn’t see the prized horse you were hoping to photograph, so you’ll have to come back another time.",
        "While sneeking around you noticed a bright light near the Rusty Spur Ranch a few days ago and saw the traveler, Wyatt Clockwise also snooping around in the dark near there. ",
      ],
    },
    {
      name: ["Sheriff Hardlaw"],
      description: "Local County Sheriff",
      img: WesternCharacterEight,
      id: "05290c63-678c-405c-9d3a-6d646b6d018a",
      optional: true,
      shareable: [
        "You are the new sheriff in town and it’s important to you to keep the peace, especially with curious passersby and newcomers to town like:",
        "One who seemed to almost appear out of thin air in the woods",
        "One who claims to be a fortune teller",
        "You usually chat with Rose Sagebrush, who writes the Rose Sagebrush local town newspaper, to compare notes on what is going on in town.",
      ],
      trust: [
        "You’re keeping your eyes peeled today because you saw someone sneaking around the potato fields.",
      ],
    },
  ];
};
