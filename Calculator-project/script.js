//Data

const prevCalc = document.querySelector(".previous-calc");
const mathSign = document.querySelector(".math-sign");
const currCalc = document.querySelector(".current-calc");
const clearAllBtn = document.querySelector(".clear-all");
const deleteBtn = document.querySelector(".delete");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");

// Function which displays numbers 0-9 and .
const displayNumber = function () {
  //if dot is already inclued return and dont add up more dots
  if (this.textContent === "." && currCalc.innerHTML.includes(".")) return;
  //if dot is clicked return zero before dot
  if (this.textContent === "." && currCalc.innerHTML === "")
    return (currCalc.textContent = "0.");

  //Adding up the string
  currCalc.innerHTML += this.textContent;
};

// Function which displaus operators
const operate = function () {
  //If there is no number and minus is clicked allow it
  if (currCalc.textContent === "" && this.textContent === "-")
    return (currCalc.textContent = "-");
  //If there is no number and operator is clicked return nothing
  if (currCalc.textContent === "") return;
  //If math sign is clicked again make displayResult function
  if (mathSign.textContent !== "") {
    displayResult();
  }
  //Display mathsign
  mathSign.innerHTML = this.textContent;
  //Make currentCalc number previous Calc number
  prevCalc.textContent = currCalc.textContent;
  //Make currentCall number empty
  currCalc.textContent = "";
};
// Function that deletes one value from currentCalc string
const deleteFunction = function () {
  currCalc.innerHTML = currCalc.textContent.slice(0, -1);
};
//Function that clears whole display
const clearAll = function () {
  currCalc.textContent = "";
  prevCalc.textContent = "";
  mathSign.textContent = "";
};
// Set result to 0 to modify values
let result = "0";

// Function which calculates the value depending on the operator clicked
const displayResult = function () {
  let a = Number(currCalc.textContent);
  let b = Number(prevCalc.textContent);
  let operator = mathSign.textContent;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = b - a;
      break;
    case "÷":
      result = b / a;
      break;
    case "√":
      result = Math.sqrt(b);
      break;
    case "*":
      result = a * b;
      break;
    case "%":
      result = (b / 100) * a;
      break;
    case "^":
      result = b ** a;
      break;
    case "log":
      result = Math.log(b);

    default:
      break;
  }
  currCalc.textContent = result;
  mathSign.textContent = "";
  prevCalc.textContent = "";
};

//Things to add up

//For some functions it should be performed on click funcion for example log or root square

//If equals btn was clicked next number clicked should delete the curr value and start new equation

// Event Listeners
numberBtn.forEach((number) => {
  number.addEventListener("click", displayNumber);
});
deleteBtn.addEventListener("click", deleteFunction);
clearAllBtn.addEventListener("click", clearAll);
operatorBtn.forEach((btn) => btn.addEventListener("click", operate));
equals.addEventListener("click", displayResult);
