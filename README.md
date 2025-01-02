# Counter App

This project is a simple **Counter** application built using HTML, CSS, and JavaScript. It provides basic counter functionality with the ability to increase, decrease, and reset the counter value using dynamically created DOM elements.
You can try the live version of the application here: [Counter App](https://counter-prj.netlify.app)

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
│
├── /assets
│   ├── /css
│   │   └── style.css
│   ├── /js
│   │   └── app.js
│   └── /images
│       └── [your_image.png]
│
├── .gitignore 
├── LICENSE         
├── README.md  
├── index.html

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

Here’s the updated section of your README to reflect the modified JavaScript code:

---

## JavaScript Implementation

The core functionality of the counter is built using JavaScript by:
1. Dynamically creating the elements (`label`, `buttons`) with a reusable function that accepts `tag`, `id`, and `textContent`.
2. Appending the elements to the DOM using `appendChild` and `insertBefore`.
3. Implementing **event delegation** to handle button clicks more efficiently.

### How the counter works:
- The **counter value** is initialized at `0` and displayed in a dynamically created label.
- The counter **label** is updated each time a button is clicked (increase, decrease, or reset).
- Instead of adding individual event listeners to each button, the **event delegation** approach is used. A single event listener is attached to the parent `counterController`, and button clicks are detected by checking the `id` of the clicked button.
- Based on the button clicked, the `counterValue` is modified and the updated value is displayed.

--- 

## License

This project is open-source and available under the [MIT License](LICENSE).
