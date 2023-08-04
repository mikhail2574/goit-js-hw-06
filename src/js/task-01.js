let categories = document.querySelectorAll("li.item");
console.log("Number of categories: " + categories.length);

categories.forEach((category) => {
  console.log("");
  console.log("Category: " + category.querySelector("h2").innerHTML);
  console.log("Elements: " + category.querySelectorAll("li").length);
});
