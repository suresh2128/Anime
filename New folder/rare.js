// JavaScript for animating text on scroll
document.addEventListener("DOMContentLoaded", () => {
    const animatedTexts = document.querySelectorAll('.animated-text');

    const observerOptions = {
        root: null, // Use the viewport as the container
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s forwards'; // Apply animation
                entry.target.style.opacity = '1'; // Ensure the text is visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each animated text
    animatedTexts.forEach(text => {
        observer.observe(text);
    });
});
