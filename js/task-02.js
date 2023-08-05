const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let list = document.getElementById("ingredients");

let items = ingredients.map((ingredient) => {
  let item = document.createElement("li");
  item.textContent = ingredient;
  item.setAttribute("class", "item");
  return item;
});
list.append(...items);
