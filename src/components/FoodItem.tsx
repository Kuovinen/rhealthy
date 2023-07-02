interface foodItemProps {
  type: string;
}
function FoodItem(props: foodItemProps) {
  return <div>{props.type}</div>;
}
export default FoodItem;
