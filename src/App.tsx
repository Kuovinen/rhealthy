import React from "react";
import VitaminsContainer from "./components/VitaminsContainer";
import FoodItem from "./components/FoodItem";
import Timer from "./components/Timer";
import food from "./data/food";
import "./App.css";

interface AppProps {
  title: string;
}

function App(props: AppProps) {
  const [currentFoodItem, setCurrrentFoodItem] = React.useState(food[0]);

  return (
    <div className={props.title}>
      <VitaminsContainer />
      <FoodItem data={currentFoodItem} />

      <Timer max={10} />
    </div>
  );
}

export default App;
