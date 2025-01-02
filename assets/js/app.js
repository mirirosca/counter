const counterContainer = document.getElementById('counter-container');
const counterController = document.getElementById('counter-controller');

let counterValue = 0;

// Function to create DOM elements
const createElement = (tag, id, textContent) => {
  const element = document.createElement(tag);
  if (id) element.id = id;
  if (textContent) element.textContent = textContent;
  return element;
};

const counterLabel = createElement("label", "counter-label", `${counterValue}`);
const decreaseBtn = createElement('button', 'decreaseBtn', '-');
const increaseBtn = createElement('button', 'increaseBtn', '+');
const resetBtn = createElement('button', 'resetBtn', 'reset');

// Function to update the value of the counter
const updateCounter = () => {
  counterLabel.textContent = counterValue;
};

// Append elements to the DOM
counterContainer.insertBefore(counterLabel, counterController);
counterController.appendChild(decreaseBtn);
counterController.appendChild(resetBtn);
counterController.appendChild(increaseBtn);

// Event delegation
counterController.addEventListener('click', e => {
  const clickedButton = e.target;

  if (clickedButton.id === 'decreaseBtn') {
    counterValue--;
    updateCounter();
  } else if (clickedButton.id === 'increaseBtn') {
    counterValue++;
    updateCounter();
  } else if (clickedButton.id === 'resetBtn') {
    counterValue = 0;
    updateCounter();
  }
});


