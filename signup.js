document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('signup-process.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'login.html';
        } else {
            alert('Sign Up failed: ' + data.message);
        }
    })
    .catch(error => {
        console.log('Error:', error);
    });
});
