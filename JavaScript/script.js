document.getElementById('greetButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');
    if (name) {
        greetingMessage.textContent = `Hello, ${name}!`;
    } else {
        greetingMessage.textContent = 'Please enter your name.';
    }
});