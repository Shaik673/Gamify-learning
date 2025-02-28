let loginForm = document.getElementById("login");
let registerForm = document.getElementById("register");
let btn = document.getElementById("btn");

function register() {
    loginForm.style.left = "-400px"; // Slide login form out
    registerForm.style.left = "50px";  // Slide register form in
    btn.style.left = "110px";        // Move the button
}

function login() {
    loginForm.style.left = "50px";   // Slide login form in
    registerForm.style.left = "450px"; // Slide register form out
    btn.style.left = "0";           // Move the button
}


// Optional: Add event listeners for form submission (prevent default)
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent form from actually submitting (for demo)
    console.log("Login form submitted (demo)"); // Replace with your logic
    // Add your login logic here (e.g., AJAX request)
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from actually submitting (for demo)
    console.log("Register form submitted (demo)"); // Replace with your logic
    // Add your registration logic here
});


// Google Sign-in (Placeholder - requires Google API setup)
const googleSignInButton = document.querySelector('.google-btn');

googleSignInButton.addEventListener('click', () => {
    // Replace with your actual Google Sign-In logic
    alert("Google Sign-in clicked (Placeholder - Implement Google API)");
});