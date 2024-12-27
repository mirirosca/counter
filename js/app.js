const counterContainer = document.getElementById('counter-container');
const counterController = document.getElementById('counter-controller');

let counterValue = 0

// Creation of counter's btns:
// decrease, increase & reset button
const counterLabel = document.createElement("label");
counterLabel.id = "counter-label";
counterLabel.textContent = counterValue;

const decreaseBtn = document.createElement("button");
decreaseBtn.id = "decreaseBtn";
decreaseBtn.textContent = "-"

const increaseBtn = document.createElement("button");
increaseBtn.id = "increaseBtn";
increaseBtn.textContent = "+"

const resetBtn = document.createElement("button");
resetBtn.id = "resetBtn"
resetBtn.textContent = "reset"


// Function to update the value of the counter
const updateCounter = () => {
  counterLabel.textContent = counterValue;
};


// Event listener for each btn
decreaseBtn.addEventListener("click", () => {
  counterValue--;
  updateCounter();
});

increaseBtn.addEventListener("click", () => {
  counterValue++;
  updateCounter();
})

resetBtn.addEventListener("click", () => {
  counterValue = 0;
  updateCounter();
});


// Append elements to the DOM
counterContainer.insertBefore(counterLabel, counterController);
counterController.appendChild(decreaseBtn);
counterController.appendChild(resetBtn);
counterController.appendChild(increaseBtn);