export interface foodInterface {
  name: string;
  calories: number;
  vitamins: {
    name: string;
    amount: number;
    unit: string;
  }[];
  minerals: string[];
  metals: string[];
}
const food = [
  {
    name: "carrots",
    calories: 41,
    vitamins: [
      { name: "A", amount: 835, unit: "µg" },
      { name: "B6", amount: 0.138, unit: "mg" },
      { name: "C", amount: 5.9, unit: "mg" },
      { name: "E", amount: 0.66, unit: "mg" },
      { name: "K", amount: 13.2, unit: "µg" },
    ],
    minerals: ["Potassium", "Manganese"],
    metals: ["Magnesium"],
  },
];

export default food;
