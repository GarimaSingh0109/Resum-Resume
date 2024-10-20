document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('login-process.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'index.html';
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch(error => {
        console.log('Error:', error);
    });
});

