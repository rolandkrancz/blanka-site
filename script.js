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

                // Dropdown menu open on click
                document.querySelectorAll('.nav-list .dropdown > a').forEach(function(trigger) {
                    trigger.addEventListener('click', function(e) {
                        e.preventDefault();
                        const dropdown = this.parentElement;
                        // Toggle 'open' class
                        dropdown.classList.toggle('open');
                        // Close other dropdowns
                        document.querySelectorAll('.nav-list .dropdown').forEach(function(other) {
                            if (other !== dropdown) {
                                other.classList.remove('open');
                            }
                        });
                    });
                });

                // Close dropdown when clicking outside
                document.addEventListener('click', function(e) {
                    document.querySelectorAll('.nav-list .dropdown').forEach(function(dropdown) {
                        if (!dropdown.contains(e.target)) {
                            dropdown.classList.remove('open');
                        }
                    });
                });
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

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Sanitize form fields using DOMPurify
            const nameInput = this.querySelector('[name="name"]');
            const emailInput = this.querySelector('[name="email"]');
            const messageInput = this.querySelector('[name="message"]');

            if (!nameInput || !emailInput || !messageInput || typeof DOMPurify === "undefined") {
                alert("Hiba történt az űrlap elküldésekor.");
                return;
            }

            const sanitizedName = DOMPurify.sanitize(nameInput.value);
            const sanitizedEmail = DOMPurify.sanitize(emailInput.value);
            const sanitizedMessage = DOMPurify.sanitize(messageInput.value);

            emailjs.send('service_i6q2tlr', 'template_gmzd5u2', {
                name: sanitizedName,
                email: sanitizedEmail,
                message: sanitizedMessage
            })
            .then(() => {
                console.log('Email sent successfully!');
                this.reset();
            }, (error) => {
                console.log('Email sending failed', error);
                alert('Üzenetküldés sikertelen. Kérem próbálkozzon később.');
            });
        });
    }
});
