import React from "react";
import VitaminsContainer from "./components/VitaminsContainer";
import FoodItem from "./components/FoodItem";
import Workout from "./components/Workout";
import food from "./data/food";
import "./App.css";

interface AppProps {
  title: string;
}

function App(props: AppProps) {
  const [currentFoodItem, setCurrrentFoodItem] = React.useState(food[0]);
  const [running, setRunning] = React.useState(false);
  const [testTimers, setTimers] = React.useState([15, 20, 30]);
  React.useEffect(() => {
    console.log(testTimers);
  }, [testTimers]);
  return (
    <div className={props.title}>
      <VitaminsContainer />
      <FoodItem data={currentFoodItem} />
      <Workout testTimers={testTimers} setTimers={setTimers} />
    </div>
  );
}

export default App;
