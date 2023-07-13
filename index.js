

// Function to change the color of the welcome heading at a recurring interval
function changeHeadingColor() {
    const welcomeHeading = document.querySelector('.welcome_heading');

    // Array of colors to cycle through
    const colors = ['#ff0000', '#00ff00', '#0000ff'];

    // Generate a random index to select a color from the array
    const randomIndex = Math.floor(Math.random() * colors.length);

    // Set the color of the welcome heading
    welcomeHeading.style.color = colors[randomIndex];
}

// Call the changeHeadingColor function every 3 seconds
setInterval(changeHeadingColor, 1000);


