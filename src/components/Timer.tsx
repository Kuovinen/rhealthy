import React from "react";
interface timerProps {
  max: number;
}
function Timer(props: timerProps) {
  const [count, setCount] = React.useState(0);
  const style = { width: "5rem", display: "flex", justifyContent: "center" };
  React.useEffect(() => {
    const inta = setInterval(() => {
      setCount((or) => or + 1);
    }, 100);
    return () => clearInterval(inta);
  }, []);
  return <div style={style}>{count}</div>;
}
export default Timer;
