import React from "react";
import VitaminsContainer from "./components/VitaminsContainer";
import "./App.css";

interface AppProps {
  title: string;
}

function App(props: AppProps) {
  return (
    <div title={props.title}>
      <VitaminsContainer />
    </div>
  );
}

export default App;
