function signUp() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // Validate username
    if (username.trim() === '') {
        alert('Please enter a username');
        return false;
    }

    // Validate password
    if (password.trim() === '') {
        alert('Please enter a password');
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
    return true;
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