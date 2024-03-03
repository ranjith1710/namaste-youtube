import { useState } from "react";
import Button from "./Button";

const ButtonList = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttonValues = [
    "Cricket",
    "Cooking",
    "Movies",
    "Courses",
    "Entertainment",
    "Learning",
    "Music",
    "Live",
    "News",
    "Recently uploaded",
    "JavaScript",
    "Parithabangal",
    "Micset",
    "Anime",
    "Cartoons",
    "Music",
    "Courses",
    "Entertainment",
    "Learning",
    "Music",
    "Live",
    "News",
    "Live",
    "News"
  ];
  console.log("selected " + selectedIndex);
  return (
    <div className=" flex flex-wrap">
      {buttonValues.map((name, index) => (
        <Button
          key={index}
          name={name}
          index={index}
          isSelected={index == selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      ))}
    </div>
  );
};

export default ButtonList;
