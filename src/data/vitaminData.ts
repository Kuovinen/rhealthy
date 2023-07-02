const vitamins = [
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
      "eggs",
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
  {
    name: "B1",
    helps: [
      "Boosts energy production.",
      "Reduces effects of sepsis.",
      "Antidepressant.",
      "Diabetic health support.",
    ],
    containedin: [
      "breakfast cereals",
      "pork",
      "fish",
      "beans",
      "sunflower seeds",
      "yogurt",
    ],
    lackeffects: [
      { name: "Fatigue.", type: "senses" },
      { name: "Loss of appetite.", type: "senses" },
      { name: "Irritability.", type: "senses" },
      { name: "Nerve damage.", type: "senses" },
      { name: "Tingling arms and legs.", type: "extremeties" },
      { name: "Blurry vision", type: "head" },
      { name: "Nausea and vomiting.", type: "senses" },
      { name: "Delirium.", type: "senses" },
    ],
  },
];

export default vitamins;
