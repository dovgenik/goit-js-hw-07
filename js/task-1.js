const listWithId = document.querySelector("#categories");
const categoriesItems = listWithId.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(function callback(element) {
  console.log(`Category: ${element.querySelector("h2").textContent}` );
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});

