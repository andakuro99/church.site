// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  });
});

// Contact form alert
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
  alert("Thank you for contacting Anchor of Hope Church! We'll get back to you soon.");
});
