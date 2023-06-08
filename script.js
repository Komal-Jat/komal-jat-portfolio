// script.js

// Smooth scrolling effect for anchor links
const navLinks = document.querySelectorAll('a[href^="#"]');
for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const offsetTop = targetElement.offsetTop;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// Toggle navigation menu on small screens
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
    navMenu.classList.toggle('active');
}

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    // Handle form submission logic here
    // You can send the form data to a server or perform any other action
    // For demonstration purposes, we'll just display a success message
    alert('Form submitted successfully!');
    form.reset();
}
