const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');

function toggleMenu() {
    navLinks.classList.toggle('active');
}

// Scroll Effect for Navbar (Only if hero section exists)
const heroSection = document.querySelector('.hero');
if (heroSection && navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}
