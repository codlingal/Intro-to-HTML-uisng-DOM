function validate(e) {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgbox = document.getElementById('message');

    let message = '';

    if ( email === '') {
        message = 'enter an email.';
        msgbox.style.color = 'red';
    } else if (pass === '') {
        message = 'Enter a password.';
        msgBox.style.color = 'red';
    } else if (age === '') {
        msgBox.style.color = 'red';
    } else {
        message = 'Login successful!';
        msgBox.style.color = 'green';
    }

    msgBox.innerText = message;
}
