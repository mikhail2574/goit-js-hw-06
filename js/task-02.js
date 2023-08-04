const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let list = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  let item = document.createElement("li"); // в цикле чтобы при каждой итерации создавался новый элемент
  item.textContent = ingredient;
  item.setAttribute("class", "item");
  list.appendChild(item);
});
