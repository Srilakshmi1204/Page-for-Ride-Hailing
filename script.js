
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
const formContainer = document.getElementById('contact-form-container');
const successMessage = document.getElementById('success-message');
const actualForm = document.querySelector('.contact-form');
actualForm.addEventListener('submit', function (event) {
  event.preventDefault();
  formContainer.style.display = 'none';
  successMessage.style.display = 'block';
});
document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll('.reveal-left, .reveal-right');

  window.addEventListener('scroll', () => {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  });
});