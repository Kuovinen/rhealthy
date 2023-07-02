import "./FoodItem.css";
import { foodInterface } from "../data/food";
interface foodItemProps {
  data: foodInterface;
}
function FoodItem(props: foodItemProps) {
  const { name, calories, vitamins, minerals, metals } = props.data;
  return (
    <div className="foodItem">
      <div>
        {<img src={`/food/carrots.svg`} alt={"carrots"} title={"carrots"} />}
      </div>
      <h2>{name.toUpperCase()}</h2>
      <section>
        <p>Calories: {calories}</p>
        <p>
          {vitamins.map((el) => (
            <div>{el.name}</div>
          ))}
        </p>
        <p>
          {minerals.map((el) => (
            <div>{el}</div>
          ))}
        </p>
        <p>
          {metals.map((el) => (
            <div>{el}</div>
          ))}
        </p>
      </section>
    </div>
  );
}
export default FoodItem;
