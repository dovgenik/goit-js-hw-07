function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  
  const fragment = document.createDocumentFragment();
  const perentsDiv = document.querySelector("#boxes");
  perentsDiv.innerHTML = "";

  if (amount > 0) {
    for (let index = 0; index < amount; index++) {
      const divItem = document.createElement("div");

      const divChild = document.createElement("h1");
      divChild.textContent = String(index + 1);
      divChild.style.fontSize = String(16 + index) + "px";
      divItem.appendChild(divChild);

      divItem.style.width = String(30 + 10 * index) + "px";
      divItem.style.height = String(30 + 10 * index) + "px";
      divItem.style.backgroundColor = getRandomHexColor();
      divItem.style.display = "flex";
      divItem.style.alignItems = "center";
      divItem.style.justifyContent= "center";

      fragment.appendChild(divItem);
    }
    perentsDiv.appendChild(fragment);
  }
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");


createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  
  if (amount > 0 && amount < 100) {
    input.value= "";
      createBoxes(amount);
  }
});

destroyBtn.addEventListener("click", () => {
  input.value= "";
  createBoxes(0);  
});