const textInput = document.querySelector("#name-input");
textInput.myTextDefault= "Anonymous";
const textOutput = document.querySelector("#name-output");

const inputRead= (event) => {
    if (event.currentTarget.value.trim() === "") {
        textOutput.textContent = textInput.myTextDefault;
    } else {
        textOutput.textContent = event.currentTarget.value;
    }
  }

textInput.addEventListener("input", inputRead );
