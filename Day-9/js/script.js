// ============================================================
// script.js - JavaScript for Portfolio Website
// Features:
// 1. Dark / Light Mode Toggle
// 2. Contact Form Validation
// 3. Show / Hide Project Details
// 4. Scroll To Top Button
// ============================================================


// ============================================================
// FEATURE 1: DARK / LIGHT MODE TOGGLE
//
// How it works:
// - We select the <html> element using getElementById("htmlRoot")
// - When user clicks the toggle button, we add/remove "dark-mode" class
// - CSS in style.css changes colors when "dark-mode" class is present
// ============================================================

function toggleDarkMode() {

    // Get the <html> element
    const htmlRoot = document.getElementById("htmlRoot");

    // Get the toggle button
    const themeBtn = document.getElementById("themeBtn");

    // Check if dark mode is currently ON
    if (htmlRoot.classList.contains("dark-mode")) {

        // Dark mode is ON → turn it OFF
        htmlRoot.classList.remove("dark-mode");
        themeBtn.textContent = "🌙 Dark Mode";   // update button text

    } else {

        // Dark mode is OFF → turn it ON
        htmlRoot.classList.add("dark-mode");
        themeBtn.textContent = "☀️ Light Mode";  // update button text

    }
}


// ============================================================
// FEATURE 2: CONTACT FORM VALIDATION
//
// How it works:
// - When form is submitted, this function runs (called by onsubmit)
// - We get the values from Name, Email, Message fields
// - .trim() removes extra spaces from start and end
// - If any field is empty, we show an alert and return false
//   (return false stops the form from submitting)
// - If all fields are filled, we show success alert and return true
// ============================================================

function validateForm() {

    // Get values from input fields using their id
    const name    = document.getElementById("contactName").value.trim();
    const email   = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    // Check if Name is empty
    if (name === "") {
        alert("⚠️ Please enter your name.");
        return false;   // stops form submission
    }

    // Check if Email is empty
    if (email === "") {
        alert("⚠️ Please enter your email address.");
        return false;
    }

    // Check if Message is empty
    if (message === "") {
        alert("⚠️ Please write a message.");
        return false;
    }

    // All fields are filled → show success message
    alert("✅ Thank you, " + name + "! Your message has been sent successfully.");

    // Clear the form fields after successful submission
    document.getElementById("contactName").value    = "";
    document.getElementById("contactEmail").value   = "";
    document.getElementById("contactMessage").value = "";

    return false;   // return false to prevent actual page reload (no backend)
}


// ============================================================
// FEATURE 3: SHOW / HIDE PROJECT DETAILS
//
// How it works:
// - Each project card has a hidden <div> with id like "details-1"
// - When user clicks "Show Details" button, this function runs
// - We check if the div is currently hidden (display: none)
// - If hidden → show it and change button text to "Hide Details"
// - If visible → hide it and change button text back to "Show Details"
//
// Parameters:
// - detailsId : the id of the hidden div (e.g. "details-1")
// - btn       : the button element that was clicked
// ============================================================

function toggleDetails(detailsId, btn) {

    // Find the hidden details div by its id
    const detailsDiv = document.getElementById(detailsId);

    // Check current visibility
    if (detailsDiv.style.display === "none") {

        // Currently hidden → show it
        detailsDiv.style.display = "block";
        btn.textContent = "Hide Details";           // change button text
        btn.classList.remove("btn-outline-primary");
        btn.classList.add("btn-primary");           // change button color

    } else {

        // Currently visible → hide it
        detailsDiv.style.display = "none";
        btn.textContent = "Show Details";           // reset button text
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline-primary");   // reset button color

    }
}


// ============================================================
// FEATURE 4: SCROLL TO TOP BUTTON
//
// How it works:
// - We listen to the "scroll" event on the window
// - When user scrolls down more than 300px, we show the button
// - When user scrolls back up, we hide the button
// - When user clicks the button, scrollToTop() runs
// - window.scrollTo() smoothly scrolls back to the top
// ============================================================

// Listen for scroll events on the entire page
window.addEventListener("scroll", function () {

    const scrollBtn = document.getElementById("scrollTopBtn");

    // If user has scrolled more than 300px from top
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";   // show the button
    } else {
        scrollBtn.style.display = "none";    // hide the button
    }
});


// This function runs when user clicks the scroll-to-top button
function scrollToTop() {
    window.scrollTo({
        top: 0,           // scroll to position 0 (very top)
        behavior: "smooth" // smooth animation
    });
}
