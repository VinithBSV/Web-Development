const passwordInput = document.getElementById('password');
const message = document.getElementById('message');
const length = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const number = document.getElementById('number');
const special = document.getElementById('special');

// Check password strength
passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    
    // Length check
    if (password.length >= 8) {
        length.classList.add('valid');
    } else {
        length.classList.remove('valid');
    }

    // Uppercase letter check
    if (/[A-Z]/.test(password)) {
        uppercase.classList.add('valid');
    } else {
        uppercase.classList.remove('valid');
    }

    // Lowercase letter check
    if (/[a-z]/.test(password)) {
        lowercase.classList.add('valid');
    } else {
        lowercase.classList.remove('valid');
    }

    // Number check
    if (/\d/.test(password)) {
        number.classList.add('valid');
    } else {
        number.classList.remove('valid');
    }

    // Special character check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        special.classList.add('valid');
    } else {
        special.classList.remove('valid');
    }

    // Display a message based on validation
    if (length.classList.contains('valid') &&
        uppercase.classList.contains('valid') &&
        lowercase.classList.contains('valid') &&
        number.classList.contains('valid') &&
        special.classList.contains('valid')) {
        message.textContent = 'Strong password!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Weak password!';
        message.style.color = 'red';
    }
});