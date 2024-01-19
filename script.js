function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
    } else {
        // You can add more complex validation logic here if needed

        alert('Registration successful!');
        document.getElementById('registrationForm').reset();
    }
}
