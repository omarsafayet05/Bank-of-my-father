
document.getElementById("btn-submit").addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //console.log(password);

    //Do not verify email password on the client-side.this is doing for the purpose of testing here.generally verifying email and pass on the server.

    if (email === 'safayet@gmail.com' && password === '01301681120') {
        //console.log('valid user')
        window.location.href = 'bank.html';
    }
    else {
        //console.log('invalid user')
        alert('Your password or email is incorret');
    }
})



