//Data

const prevCalc = document.querySelector(".previous-calc");
const mathSign = document.querySelector(".math-sign");
const currCalc = document.querySelector(".current-calc");
const clearAllBtn = document.querySelector(".clear-all");
const deleteBtn = document.querySelector(".delete");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const historyContainer = document.querySelector(".calculator-history");
const clearHistoryBtn = document.querySelector(".history-btn");
const rootSqr = document.querySelector(".root-sqr");
const logBtn = document.querySelector(".log");
let operationCompleted = false;
// Function which displays numbers 0-9 and '.'
const displayNumber = function (e) {
  //if dot is already inclued return and dont add up more dots
  if (this.textContent === "." && currCalc.innerHTML.includes(".")) return;
  //if dot is clicked return zero before dot
  if (this.textContent === "." && currCalc.innerHTML === "")
    return (currCalc.textContent = "0.");
  //This statement makes whenever the number is clcked after the equal sign new equations starts
  if (e.target !== "" && operationCompleted === true) {
    currCalc.textContent = "";
    operationCompleted = !operationCompleted;
  }
  if (e.target !== "" && operationCompleted === false) {
    currCalc.innerHTML += this.textContent;
  }

  //Adding up the string
};
console.log(operationCompleted);

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
  //Make currentCalc number empty
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
    case "*":
      result = a * b;
      break;
    case "%":
      result = (b / 100) * a;
      break;
    case "^":
      result = b ** a;
      break;
  }

  addToHistory();

  currCalc.textContent = result;
  mathSign.textContent = "";
  prevCalc.textContent = "";
};
//Function that calculates root square of number. The result is shown after the rootsqr btn is clicked
const calcRootSqr = function () {
  let a = Number(currCalc.textContent);
  result = Math.sqrt(a);
  addToHistory();
  prevCalc.textContent = `√(${currCalc.textContent})`;
  currCalc.textContent = result;
};
//Function that calculates log10 of number. The result is shown after the log btn is clicked
const calcLog = function () {
  let a = Number(currCalc.textContent);
  result = Math.log10(a);
  addToHistory();
  prevCalc.textContent = `log(${currCalc.textContent})`;
  currCalc.textContent = result;
};
const complete = function () {
  operationCompleted = true;
};

const addToHistory = function () {
  const item = document.createElement("li");
  item.className = "history-item";
  historyContainer.appendChild(item);

  item.textContent = `${prevCalc.textContent} ${mathSign.textContent} ${
    currCalc.textContent
  } = ${result.toLocaleString()} `;
};
const clearHistory = function () {
  const historyItem = document.querySelector(".history-item");
  historyItem.remove();
};

//Things to add up

//FIX the bugs of the binary type of language 0.14*100 || 0.1+0.2

// Event Listeners
numberBtn.forEach((number) => {
  number.addEventListener("click", displayNumber);
});
deleteBtn.addEventListener("click", deleteFunction);
clearAllBtn.addEventListener("click", clearAll);
operatorBtn.forEach((btn) => btn.addEventListener("click", operate));
equals.addEventListener("click", displayResult);
equals.addEventListener("click", complete);
clearHistoryBtn.addEventListener("click", clearHistory);
rootSqr.addEventListener("click", calcRootSqr);
logBtn.addEventListener("click", calcLog);
