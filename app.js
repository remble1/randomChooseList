const button = document.querySelector("button");
let div = document.getElementById("respond");
div.textContent = "";

let nameList = ["Emilka", "Pawelka", "Sashka", "Andriev"];

function showName() {
  randomValue = Math.floor(Math.random() * 4);
  div.textContent = nameList[randomValue];
  console.log(randomValue);
}

button.addEventListener("click", showName);
