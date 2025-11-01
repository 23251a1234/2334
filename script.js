// script.js

// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");

    // Example 1: Greet the user when the page loads
    alert("Welcome to my website!");

    // Example 2: Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Example 3: Simple form validation before submission
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();

            if (name === "" || email === "") {
                event.preventDefault(); // Stop form submission
                alert("Please fill out both your name and email.");
            } else {
                alert("Thank you for your message, " + name + "!");
            }
        });
    }
});
