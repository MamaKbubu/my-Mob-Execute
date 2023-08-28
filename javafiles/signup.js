document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const password2Input = document.getElementById('password2');
    const mobAgentCheckbox = document.querySelector('input[name="Mob"][value="Mob Agent"]');

    form.addEventListener('submit', event => {
        event.preventDefault();
        validateInputs();

        if (mobAgentCheckbox.checked) {
            window.location.href = 'business.html'; // Redirect to business.html
        }
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.textContent = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    };

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.textContent = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const isValidEmail = email => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(String(email).toLowerCase());
    };

    const validateInputs = () => {
        const usernameValue = usernameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        const password2Value = password2Input.value.trim();

        // Validation logic for username, email, password, and password2 inputs...

    };

    mobAgentCheckbox.addEventListener('change', event => {
        if (mobAgentCheckbox.checked) {
            window.location.href = 'business.html'; // Redirect to business.html
        }
    });
});
