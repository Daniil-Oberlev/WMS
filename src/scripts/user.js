import '../pages/user.css';
import './sidebar.js';

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');
  const email = document.getElementById('email');

  const password = document.getElementById('password');

  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showError(element, errorMessage) {
    element.classList.add('error');
    errorMessage.style.display = 'block';
  }

  function hideError(element, errorMessage) {
    element.classList.remove('error');
    errorMessage.style.display = 'none';
  }

  function validateEmail() {
    if (!emailPattern.test(email.value)) {
      showError(email, emailError);
    } else {
      hideError(email, emailError);
    }
  }

  function validatePassword() {
    if (password.value.length < 5) {
      showError(password, passwordError);
    } else {
      hideError(password, passwordError);
    }
  }

  function validateForm(event) {
    validateEmail();
    validatePassword();

    const errors = loginForm.querySelectorAll('.error');
    if (errors.length > 0) {
      event.preventDefault();
    }
  }

  email.addEventListener('input', validateEmail);
  password.addEventListener('input', validatePassword);

  loginForm.addEventListener('submit', validateForm);
});
