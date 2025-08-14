// Initialize EmailJS
emailjs.init("Tq8EKzUhDjMyECU7v");

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    const statusDiv = document.getElementById('form-status');

    emailjs.sendForm('service_rh8qalg', 'template_2ie5n5j', this)
        .then(() => {
            statusDiv.style.color = 'green';
            statusDiv.textContent = "✅ Message sent successfully! We will respond soon.";
            this.reset(); // clear form
        }, (error) => {
            statusDiv.style.color = 'red';
            statusDiv.textContent = "❌ Oops! Something went wrong. Please try again.";
            console.error(error);
        });
});
