document.addEventListener("DOMContentLoaded", () => {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        fetch('./navbar.html')
            .then(response => response.text())
            .then(data => {
                navbarPlaceholder.innerHTML = data;

                // Add event listeners after navbar is loaded
                const hamburger = document.querySelector('.hamburger-menu');
                const navList = document.querySelector('.nav-list');

                if (hamburger && navList) {
                    hamburger.addEventListener('click', () => {
                        hamburger.classList.toggle('active');
                        navList.classList.toggle('active');
                    });
                }
            })
            .catch(error => console.error('Error loading navbar:', error));
    } else {
        console.error('Navbar placeholder element not found.');
    }
});


        // Dynamically load the footer
document.addEventListener("DOMContentLoaded", () => {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('./footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
    } else {
        console.error('Footer placeholder element not found.');
    }
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

    parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// EmailJs

emailjs.init({ publicKey: "0tmHBXZDwRdO9WHY9" });

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm('service_i6q2tlr', 'template_gmzd5u2', this)
    .then(() => {
        console.log('Email sent successfully!');
        this.reset();
    }, (error) => {
        console.log('Email sending failed', error);
        alert('Üzenetküldés sikertelen. Kérem próbálkozzon később.');
    });  });
  
