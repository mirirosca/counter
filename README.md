# Counter App

This project is a simple **Counter** application built using HTML, CSS, and JavaScript. It provides basic counter functionality with the ability to increase, decrease, and reset the counter value using dynamically created DOM elements.

## Features

- **Increase Button (`+`)**: Increases the counter value by 1 when clicked.
- **Decrease Button (`-`)**: Decreases the counter value by 1 when clicked.
- **Reset Button (`Reset`)**: Resets the counter value to 0 when clicked.
- **Dynamic DOM Manipulation**: The counter label and buttons are created and appended to the DOM using JavaScript.
- **Responsive Design**: The app is responsive and centered vertically and horizontally using CSS Flexbox.

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: For styling the counter elements.
- **JavaScript**: For DOM manipulation and adding interactive functionality.

## Project Structure

```plaintext
.
├── css/
│   └── style.css        # Styling for the counter
├── js/
│   └── app.js           # JavaScript logic for the counter
└── index.html           # Main HTML file
```

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/counter.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd counter
   ```

3. Open `index.html` in your browser to view and use the counter app.

## Usage

1. Open the `index.html` file in any modern web browser.
2. Use the `+` and `-` buttons to increase or decrease the counter value.
3. Press the `Reset` button to reset the counter value to 0.

## JavaScript Implementation

The core functionality of the counter is built using JavaScript by:
1. Creating the elements (`label`, `buttons`) dynamically.
2. Appending the elements to the DOM with `appendChild`.
3. Using event listeners (`addEventListener`) to handle button clicks and update the counter value.

Here's a brief explanation of how the counter works:

- The **counter value** is initialized at `0`.
- The **counter label** is updated each time one of the buttons is clicked (increase, decrease, or reset).
- Event listeners on the buttons adjust the `counterValue` variable and update the DOM with the new value.


## License

This project is open-source and available under the [MIT License](LICENSE).
