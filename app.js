const submit = document.querySelector('button');
const isMatchPassword = document.querySelector('.isMatchPassword')

submit.addEventListener('click', function(e) {
    const password = document.querySelector('#password')
    const confirmPassword = document.querySelector('#confirmPassword')
    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        password.classList.add('error');
        confirmPassword.classList.add('error');
        isMatchPassword.style.display = 'block';
    }
    else if (!password.value) {
        e.preventDefault();
        password.classList.add('error');
        confirmPassword.classList.add('error');
        isMatchPassword.style.display = 'none';
    }
});