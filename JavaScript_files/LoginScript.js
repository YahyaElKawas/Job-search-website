document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var savedUsername = localStorage.getItem('signupUsername');
        var savedPassword = localStorage.getItem('signupPassword');
        var savedUserType = localStorage.getItem('userType');

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username.trim() === '' || password.trim() === '') {
            alert("Please enter both username and password");
            return;
        }

        console.log("Username:", username);
        console.log("Password:", password);
        console.log("User Type:", savedUserType);

        if (username === savedUsername && password === savedPassword) {
            if (savedUserType === 'user') {
                window.location.href = "index.html";
            } else if (savedUserType === 'admin') {
                window.location.href = "indexadmin.html";}
        } else {
            alert("Incorrect username or password. Please try again.");
        }
    });
});
