const hamburger = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => {
    observer.observe(element);
});

// Hero-image parallax effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.hero-image');
    let scrollPosition = window.scrollY;

    parallax.style.backgroundPositionY = scrollPosition * 0.6 + 'px';
});
