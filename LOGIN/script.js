document.getElementById('loginForm').addEventListener('submit', function(e) {
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const usernameError = document.getElementById('username-error');
  const passwordError = document.getElementById('password-error');

  let valid = true;
  usernameError.textContent = '';
  passwordError.textContent = '';

  if (!username.value.trim()) {
    usernameError.textContent = 'Username is required.';
    valid = false;
  }

  if (!password.value.trim()) {
    passwordError.textContent = 'Password is required.';
    valid = false;
  }

  if (!valid) {
    e.preventDefault(); // Stop form from submitting
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const showRegister = document.getElementById('showRegister');
  const showLogin = document.getElementById('showLogin');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (showRegister) {
    showRegister.addEventListener('click', function(e) {
      e.preventDefault();
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    });
  }

  if (showLogin) {
    showLogin.addEventListener('click', function(e) {
      e.preventDefault();
      registerForm.style.display = 'none';
      loginForm.style.display = 'block';
    });
  }
});