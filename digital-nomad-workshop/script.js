document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for contacting us! We will get back to you soon.');
    this.reset();
});
