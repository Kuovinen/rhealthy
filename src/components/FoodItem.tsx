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
        <div>
          {vitamins.map((el) => (
            <div key={crypto.randomUUID()}>{el.name}</div>
          ))}
        </div>
        <div>
          {minerals.map((el) => (
            <div key={crypto.randomUUID()}>{el}</div>
          ))}
        </div>
        <div>
          {metals.map((el) => (
            <div key={crypto.randomUUID()}>{el}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default FoodItem;
