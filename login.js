function login() {
    console.log("Attempting login...");
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Validate username
    if (username.trim() === '') {
        document.getElementById('loginMessage').textContent = 'Please enter a username';
        return false;
    }

    // Validate password
    if (password.trim() === '') {
        document.getElementById('loginMessage').textContent = 'Please enter a password';
        return false;
    }

    // Simulate user authentication (replace this with your own logic)
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        // Set currentUser in localStorage
        localStorage.setItem("currentUser", username);
        // Redirect to home page
        console.log("Redirecting to home page...");
        window.location = "home.html";
        return false; // Return true to allow the form submission
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid username or password';
        return false; // Return false to prevent the form submission
    }
}


window.onload = function() {
    if (localStorage.getItem("currentUser")) {
        document.getElementById("loginSignup").style.display = "none";
        document.getElementById("profile").style.display = "block";
    } else {
        document.getElementById("loginSignup").style.display = "block";
        document.getElementById("profile").style.display = "none";
    }
};