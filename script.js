
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
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});
