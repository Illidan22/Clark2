function signUp() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const passwordCheck = document.getElementById('signupPasswordCheck').value;
    const min = 8, max = 25;

    // Validate username
    if (username.trim() === '') {
        alert('Please enter a username');
        return false;
    } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(username)) {
        alert("Email is not valid. Must have this format username@email.com");
        return false;
    }

    // Validate password
    if (password.trim() === '') {
        alert('Please enter a password');
        return false;
    }  else if (password.trim().length < min || password.trim().length > max) {
        alert("Password should be between 8 and 25 characters!");
        return false;
    }

    if (password !== passwordCheck) {
        window.alert("Password and Confirm Password Do Not Match");
        return false;
    }
    // Check if the username already exists (replace this with your own logic)
    if (localStorage.getItem(username)) {
        alert('Username already exists');
        return false;
    }

    // Add the new user to localStorage (replace this with your own storage mechanism)
    localStorage.setItem(username, password);

    alert('Sign up successful! Please login.');
    window.location = "login.html";
    return false;
}

// Check if user is logged in
window.onload = function() {
    if (localStorage.getItem("currentUser")) {
        // If logged in, hide login/signup links and show profile link
        document.getElementById("loginSignup").style.display = "none";
        document.getElementById("profile").style.display = "block";
    } else {
        // If not logged in, show login/signup links and hide profile link
        document.getElementById("loginSignup").style.display = "block";
        document.getElementById("profile").style.display = "none";
    }
};