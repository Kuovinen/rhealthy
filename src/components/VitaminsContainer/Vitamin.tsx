import "./Vitamin.css";
interface vitaminProps {
  vit: {
    name: string;
    helps: string[];
    containedin: string[];
    lackeffects: { name: string; type: string }[];
  };
}
function Vitamin(props: vitaminProps) {
  const { name, helps, containedin, lackeffects } = props.vit;

  return (
    <div className={"vitamin"}>
      <h3>{name}</h3>
      <p>
        <h4>IMPORTANT FOR</h4>
        <ul>
          {helps.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
        <h4>CONTAINED IN</h4>

        {containedin.map((el) => (
          <button>
            <span>{<img src={`/food/${el}.svg`} alt={el} title={el} />}</span>
          </button>
        ))}

        <h4>LACK EFFECTS</h4>
        <ul>
          {lackeffects.map((el) => (
            <li>{el.name}</li>
          ))}
        </ul>
      </p>
    </div>
  );
}
export default Vitamin;

/*
{
  name: "A",
  helps: [
    "Vitamin A is important for the creation and repair of skin cells.",
    "Teeth health",
    "Skeletal and soft tissue",
    "Needed for good eyesight in low light conditions",
    "Pregnancy health",
  ],
  containedin: [
    "carrots",
    "sweet potatoes",
    "spinach",
    "egg",
    "cantaloupe",
    "mango",
    "broccoli",
    "liver",
    "pumpkin",
  ],
  lackeffects: [
    { name: "Night blindness.", type: "head" },
    {
      name: "The eyes become very dry and crusted, which may damage the cornea and retina.",
      type: "head",
    },
    { name: "Eczema", type: "skin" },
    { name: "Infertility in both men and women.", type: "reproductive" },
  ],
},
*/
