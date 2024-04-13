// Define an array to store leaderboard data (you can replace this with your own data)
let leaderboardData = [
    { username: "user1", score: 100 },
    { username: "user2", score: 90 },
    { username: "user3", score: 80 }
];

// Function to update the leaderboard display
function updateLeaderboard() {
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = ''; // Clear previous entries

    leaderboardData.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${entry.username}: ${entry.score}`;
        leaderboard.appendChild(listItem);
    });
}

// Function to handle logout
function logout() {
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
    window.location.href = "login.html"; // Redirect to login page
}

window.onload = function() {
    if (!localStorage.getItem("currentUser")) {
        alert("Please log in to access this page.");
        window.location.href = "login.html"; // Redirect to login page if not logged in
    } else {
        updateLeaderboard();
    }
};