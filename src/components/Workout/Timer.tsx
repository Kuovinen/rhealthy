import React from "react";
import "./Timer.css";
interface timerProps {
  max: number;
  testTimers: number[];
  setTimers: React.Dispatch<React.SetStateAction<number[]>>;
}
function Timer(props: timerProps) {
  const [count, setCount] = React.useState(0);
  //styles for timer prograss bar
  const style = { width: "5rem", display: "flex", justifyContent: "center" };
  const style2 = { width: `${(count * 100) / props.max}%` };
  //update timer every X seconds
  React.useEffect(() => {
    if (count > props.max) {
      setCount(0);
      if (props.testTimers.length > 1)
        props.setTimers((original) => original.slice(1));
      else {
        props.setTimers(() => []);
      }
    }
    const inta = setInterval(() => {
      setCount((i) => i + 1);
    }, 100);
    return () => {
      clearInterval(inta);
    };
  }, [count]);

  return (
    <div>
      <div className="progressContainer">
        <div className="timerProgress" style={style2}></div>
      </div>
      <div style={style}>{count}</div>
    </div>
  );
}
export default Timer;

export function emptyTimer(count: number) {
  const style = { width: "5rem", display: "flex", justifyContent: "center" };
  return (
    <div key={crypto.randomUUID()}>
      <div className="progressContainer"></div>
      <div style={style}>{count}</div>
    </div>
  );
}
