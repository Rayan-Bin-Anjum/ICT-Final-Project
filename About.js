// Add scroll effect to the navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Toggle the navbar background and padding on scroll
    if (window.scrollY > 50) { // If the user scrolls down 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Remove active class from all nav links and add to the clicked link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(link => link.classList.remove('active'));  // Remove active from all links
            link.classList.add('active');  // Add active to the clicked link
        });
    });
});