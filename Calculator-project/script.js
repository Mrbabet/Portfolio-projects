const prevCalc = document.querySelector(".previous-calc");
const currCalc = document.querySelector(".current-calc");
const clearAll = document.querySelector(".clear-all");
const deleteBtn = document.querySelector(".delete");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");

const displayNumber = function () {};
numberBtn.forEach((btn) => btn.addEventListener("click", displayNumber()));
