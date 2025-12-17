// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with: ${email}`);
    e.target.reset();
});

// Add hover effect to news cards
const newsCards = document.querySelectorAll('.news-card');

newsCards.forEach(card => {
    card.addEventListener('click', () => {
        alert('Article clicked! In a real website, this would navigate to the full article.');
    });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        e.target.classList.add('active');
        // Close mobile menu if open
        navMenu.classList.remove('active');
    });
});

// Dynamic timestamp update
function updateTimestamps() {
    const timestamps = document.querySelectorAll('.article-meta span:last-child');
    // This is a simple example - in a real application, you'd calculate actual time differences
    console.log('Timestamps would be updated here in a real application');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('News website loaded successfully!');
    updateTimestamps();
});