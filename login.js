
        const signUp = document.querySelector(".signupbtn");
    
        signUp.addEventListener("click", (e) => {
            e.preventDefault();
    
            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;
            const confirmPassword = document.querySelector("#confirmPassword").value;
    
            if (!name || !email || !password || !confirmPassword) {
                alert("All fields are required");
                return;
            }
    
            const userData = {
                name,
                email,
                password,
                confirmPassword
            };
    
            registerUser(userData);
        });
    
        const registerUser = async (user) => {
            try {
                const res = await fetch("http://localhost:5000/auth/signup", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(user)
                });
    
                const data = await res.json();
                window.location.href = "http://127.0.0.1:5500/Resum-Resume/login.html";
    
            } catch (error) {
                console.log(error.message);
                alert("Check the credentials");
            }
        };
    
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
                    window.location.href = 'index.html';
                } else {
                    alert('Sign Up failed: ' + data.message);
                }
            })
            .catch(error => {
                console.log('Error:', error);
            });
        });
    
    