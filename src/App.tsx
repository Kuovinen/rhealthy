import React from "react";
import VitaminsContainer from "./components/VitaminsContainer";
import FoodItem from "./components/FoodItem";
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
    </div>
  );
}

export default App;
