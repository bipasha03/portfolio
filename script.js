document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    const typingElement = document.querySelector('.typing');
    const text = "Welcome to My Portfolio!";
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();

    // Smooth scrolling
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetPosition = document.getElementById(targetId).offsetTop - 60;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});
