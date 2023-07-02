import React from "react";
import Vitamin from "./Vitamins/Vitamin";
import vitaminData from "../data/vitaminData";
import "./VitaminsContainer.css";
function Vitamins() {
  const vNames = [
    "A",
    "C",
    "D",
    "E",
    "K",
    "B1",
    "B2",
    "B3",
    "B5",
    "B6",
    "B7",
    "B9",
    "B12",
  ];
  const [currentVitamin, setCurrentVitamin] = React.useState("A");
  const dataToDisplay = vitaminData.filter(
    (element) => element.name === currentVitamin
  );

  return (
    <div className="vitamins">
      <div className="vitButtons">
        {vNames.map((el) => (
          <button onClick={() => setCurrentVitamin(el)}>{el}</button>
        ))}
      </div>
      <div>
        {dataToDisplay.map((item) => (
          <Vitamin vit={item} />
        ))}
      </div>
    </div>
  );
}
export default Vitamins;
