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
      name: ["Bob 'bull' Rider", "Barbara 'bull' Rider"],
      description: "Cattle Rancher at Rusty Spur Ranch",
      img: WesternCharacterFour,
      id: "b7a32869-0579-4c2f-8f35-220fd5ad340e",
      shareable: [
        "You’re the most lucrative rancher in the region, and you believe the town is only as prosperous as it is because of your efforts.",
        "The success of your ranch - and maybe even this whole town - relies on your stallions such as your prized horse, Bucky.",
        "You headed to the local Winchester Mercantile to gather some supplies with your righthand man on the ranch, Tex Ace",
        "You’re debating if it was wise to leave the new cowboy, Silver Marshal, alone to watch over the ranch…oh well!",
      ],
      trust: [
        "Your once prized stallion, Bucky, is draining resources and jeopardizing your business",
        "You don’t have the heart to replace Bucky even though cowboy Tex Ace insists it’s the right thing to do for the business",
        "You’re also hoping you’ll run into the fortune teller passing through, Professor Fate, for some advice.",
      ],
    },
    {
      name: ["Tex Ace"],
      description: "Cowboy",
      img: WesternCharacterFive,
      id: "cf65eadb-9879-4c4c-8884-82ec3669c560",
      shareable: [
        "You are the righthand man at Rusty Spur Ranch and make sure everything runs smooth.",
        "You have noticed your neighbor, Al Pacino the Alpaca Farmer, has been snooping around",
        "You are training the new cowboy, Silver Marshal, and left him in charge while you and Rancher Rusty Spur pick up supplies at the Winchester Mercantile today",
      ],
      antagonist: true,
      trust: [
        "You’ve done it, don’t get caught!!!",
        "Who => You stole, Bucky, the once prized stallion from Rusty Spur Ranch",
        "Why =>  Money! Buck is no longer in his prime. He’s draining resources and jeopardizing the ranch and your job, but his sale could set you up well to start over in another town. ",
        "How => You made a deal with a horse rescue a few towns east to buy Buck for a pretty penny. You received a telegram that the horse rescue is on its way. You used horse tranquilizer, Xylazine, to put Buck to sleep and make the sale later today.",
        "You are hoping to pin the horse disappearance on other suspicious townsfolk. ",
      ],
    },
    {
      name: ["Silver Marshal"],
      description: "New Guy at Rusty Spur Ranch",
      img: WesternCharacterFive,
      id: "cf65eadb-9879-4c4c-8884-82ec3669c560",
      shareable: [
        "You’re the new guy at Rusty Spur Ranch",
        "Cowboy _ has been training you, but all he’s been doing lately is complaining about one of the horses, Buck",
        "You were incharge of the ranch this morning while Rancher Rusty Spur and Cowboy _ went into town ",
        "Things to share with only those you trust",
        "You noticed your neighbor, _ the Alpaca Farmer, has been snooping around",
        "You ran to the mercantile so fast that you must have dropped your keys to the ranch somewhere",
      ],
    },
    {
      name: ["Ruth Winchester", "Rick Winchester"],
      description: "Owner of Winchester Mercantile ",
      img: WesternCharacterSix,
      id: "4f040247-2b21-4e62-bcac-6c1e17a89e36",
      shareable: [
        "You own the local mercantile and business is booming as the town is growing quickly",
        "Your boy _, is just old enough to help around and today he will help you harvest potatoes from your field ",
      ],
      trust: [
        "You’ve had some strange special orders lately especially from…_ ",
        "Udara, the fortune teller, who buys herbs and spices from around the world ",
        "_, ranch boss at Rusty Spur Ranch, who has been in more than usual though you can’t recall what he bought last ",
        "Lisa, a passerby that bought the last of your apples, carrots, and hay",
      ],
    },
    {
      name: ["Rose Sagebrush", "Roman Sagebrush"],
      description: "Reporter at Heart of the West Gazette",
      img: WesternCharacterSeven,
      id: "45aa3daa-8f19-4b35-907d-d1b60582621b",
      shareable: [
        "You are a writer for the Lexi’s Local, the town newspaper ",
        "With the town growing, and with it, more tales to tell, you’re looking to hire a photographer ",
        "You clearly need the help - you have misplaced your journal that contains very important notes and story ideas",
        "Today you are heading to the mercantile to buy a new journal and hope you run into some of the travelers to conduct some interviews for the paper",
      ],
      trust: [
        "You are writing a juicy tale to expose something fishy going on at Rusty Spur Ranch. ",
        "You were able to intercept a telegram from Rusty Spur Ranch, so you snuck into the barn at Rusty Spur Ranch in the wee hours of the morning to investigate. When you got there you didn’t see the prized horse you were hoping to photograph, so you’ll have to come back another time.",
      ],
    },
    {
      name: ["Sheriff Jerry Hardlaw", "Sheriff Jill Hardlaw"],
      description: "Local County Sheriff",
      img: WesternCharacterEight,
      id: "05290c63-678c-405c-9d3a-6d646b6d018a",
      shareable: [
        "You are the new sheriff in town and it’s important to you to keep the peace, especially with curious passersby and newcomers to town like:",
        "One who seemed to almost appear out of thin air in the woods",
        "One who looks to be lost, but has picked up quite a lot of supplies at the local mercantile",
        "One who claims to be a fortune teller",
        "You usually chat with Lexi, who writes the Lexi’s Local town newspaper, to compare notes on what is going on in town ",
      ],
      trust: [
        "You’re keeping your eyes peeled today because you saw someone sneaking around the potato fields  ",
      ],
    },
    {
      name: ["Wyatt Clockwise", "Wendy Clockwise"],
      description: "A mysterious traveler",
      img: WesternCharacterOne,
      id: "5c2b919b-6549-480d-b0ab-bb86f6fb2f0c",
      shareable: [
        "You travel around the west rescuing horses that are injured or aged out of ranches ",
        "After a hefty donation to the horse rescue from  a local Alpaca Farm, you are able to purchase horses for rescue",
        "Telegram delivery boy, Leo, has been visiting you quite a bit",
      ],
      trust: [
        "You’ve been exchanging anonymous telegrams asking you to rescue a very special horse and they drove a hard bargain demanding top dollar - you were able to make it work thanks for the hefty donation",
        "Today is the day you are meeting this strange telegram author and in the meantime, you stocked up on apples, carrots, and hay at the local Winchester Mercantile",
      ],
    },
  ];
};
