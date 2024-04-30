<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sokoban Game</title>
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="./header.css"/>
<link rel="stylesheet" href="trans.css"/>
</head>

<div class="header">
    <div class="navbar">
        <nav>
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="index.html">About us</a></li>
            </ul>
        </nav>
    </div>
</div>
<h2>Welcome to the Home Page</h2>
<button onclick="logout()">Logout</button>

<style>
    @keyframes popup {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        100% { opacity: 1; transform: translate(-50%, -50%) scale(2); }
    }
</style>

<body>
    
    <div id="gameBoard"></div>
    <div id="victoryModal" style="display: none; position: fixed; z-index: 1; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 40%; max-width: 500px; height: auto; background-color: rgba(255, 255, 255, 0.4); border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); overflow: hidden; opacity: 0; animation: popup 0.5s forwards;">
        <div style="text-align: center; padding: 20px;">
            <span id="closeModal" style="color: #aaa; position: absolute; top: 10px; right: 10px; cursor: pointer; font-size: 24px;">&times;</span>
            <img src="gojo.png" alt="Victory Image" style="width: 100%; max-width: 300px; height: auto; display: block; margin: 0 auto;">
            <h2 style="margin-top: 20px;">Victory</h2>
        </div>
    </div>
    
    <script src="scripts.js"></script>

    <div class="fade-transition"></div>
    <div class="content">
    <script src="trans.js"></script>

<body>

<script src="home.js"></script>
<script>
    // Check if user is logged in
    window.onload = function() {
        if (!localStorage.getItem("currentUser")) {
            alert("Please log in to access this page.");
            window.location.href = "login.html";
        }
    };
</script>

</body>
</html>
