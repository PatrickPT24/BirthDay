document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input value for the name
    const name = document.getElementById('name').value;

    // Set a static birthday message
    const staticMessage = "Wishing you a day filled with love, joy, and lots of cake...!😘";

    // Output the birthday wishes
    document.getElementById('outputHappyBirthday').innerText = `🎂 Happy Birthday! 🎂`; // New line for birthday message
    document.getElementById('outputName').innerText = name; // Set the name

    // Output the static message
    document.getElementById('outputMessage').innerText = staticMessage;

    // Show the output section with animation
    document.getElementById('outputSection').classList.remove('hidden');

    // Hide the input section
    document.querySelector('.input-section').classList.add('hidden-input');
});
