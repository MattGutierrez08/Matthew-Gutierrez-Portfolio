document.getElementById('greetButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');
    if (name) {
        greetingMessage.textContent = `Hello, ${name}!`;
    } else {
        greetingMessage.textContent = 'Please enter your name.';
    }
});

// PARTIAL IMPLEMENTATION OF SCROLL TO TOP BUTTON 

// Step 1: Select the button element from the DOM (use `document.getElementById`)
// Hint: The button's ID is 'scrollToTopBtn'

// Step 2: Add an event listener to the window for the 'scroll' event
// Hint: Use `window.addEventListener('scroll', function() { ... })`

// Step 3: Inside the scroll event, check the scroll position
// Hint: Use `window.scrollY` to find out how far the user has scrolled.
// If the user has scrolled down more than 200px, make the button visible.
// If not, hide the button.
// You can show/hide the button using `style.display = 'block'` or `style.display = 'none'`

// Step 4: Add an event listener to the button for the 'click' event
// Hint: When the button is clicked, you need to scroll to the top of the page smoothly.
// Use `window.scrollTo({ top: 0, behavior: 'smooth' });`

// Step 5: Test your implementation!

// Uncomment the lines below and complete the code as an exercise!

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function() {
   document.getElemntById('scrollToTopBtn') // Your code here to show or hide the button
});

scrollToTopBtn.addEventListener('click', function() {
    // Your code here to scroll to the top
});
