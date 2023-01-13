import MansionOne from "../../images/mansion-1.jpeg";
import MansionTwo from "../../images/mansion-2.jpeg";
import MansionThree from "../../images/mansion-3.jpeg";
import MansionFour from "../../images/mansion-4.jpeg";
import MansionFive from "../../images/mansion-5.jpeg";

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
