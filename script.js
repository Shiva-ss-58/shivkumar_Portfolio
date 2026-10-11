// Mobile navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
menuToggle.classList.toggle('active');
});

```
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});
```

}

// Update the footer year automatically
const yearElement = document.querySelector('#current-year');

if (yearElement) {
yearElement.textContent = new Date().getFullYear();
}

// Reveal elements when scrolling
const revealElements = document.querySelectorAll(
'.section, .project-card, .skill-card, .experience-card'
);

if ('IntersectionObserver' in window) {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });

```
revealElements.forEach(element => {
    observer.observe(element);
});
```

}
