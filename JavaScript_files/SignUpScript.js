
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("signupform");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var repassword = document.getElementById("repassword").value;
        var email = document.getElementById("email").value;
        var userType = document.getElementById("userType").value;

        if (username.trim() === '' || password.trim() === '' || email.trim() === '') {
            alert("Please enter your information to continue");
            return;
        }
        
        if (repassword !== password){
            alert("Please re-enter your correct password");
            repassword.value = '';
            return;
        }

        localStorage.setItem('signupUsername', username);
        localStorage.setItem('signupEmail', email);
        localStorage.setItem('signupPassword', password);
        localStorage.setItem('userType', userType);

        console.log("Username:", username);
        console.log("Password:", password);
        console.log("E-Mail:", email);
        console.log("User Type:", userType);

        window.location.href = "Login.html";
    });
});
