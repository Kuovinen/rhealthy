import React from "react";
import Vitamin from "./VitaminsContainer/Vitamin";
import vitaminData from "../data/vitaminData";
import "./VitaminsContainer.css";
function VitaminsContainer() {
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
          <button
            key={crypto.randomUUID()}
            onClick={() => setCurrentVitamin(el)}
          >
            {el}
          </button>
        ))}
      </div>
      <div>
        {dataToDisplay.map((item) => (
          <Vitamin key={crypto.randomUUID()} vit={item} />
        ))}
      </div>
    </div>
  );
}
export default VitaminsContainer;
