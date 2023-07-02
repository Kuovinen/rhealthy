import React from "react";
import Timer from "./Workout/Timer";
import { emptyTimer } from "./Workout/Timer";
interface WorkoutProps {
  testTimers: number[];
  setTimers: React.Dispatch<React.SetStateAction<number[]>>;
}
function Workout(props: WorkoutProps) {
  const [running, setRunning] = React.useState(false);
  const { testTimers, setTimers } = props;
  return (
    <div className="timersTest" style={{ minWidth: "7rem" }}>
      <button onClick={() => setRunning((orig) => !orig)}>START</button>
      {running && testTimers.length ? (
        <Timer
          max={testTimers[0]}
          setTimers={setTimers}
          testTimers={testTimers}
        />
      ) : (
        ""
      )}
      {testTimers.slice(running ? 1 : 0).map((i) => emptyTimer(i))}
    </div>
  );
}
export default Workout;
