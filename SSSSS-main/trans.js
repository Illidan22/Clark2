function fadeOutTransition() {
    document.querySelector('.fade-transition').style.opacity = '0';
}

function fadeInTransition() {
    document.querySelector('.fade-transition').style.opacity = '1';
}

window.addEventListener('beforeunload', function() {
    fadeInTransition();
});

window.addEventListener('load', function() {
    fadeOutTransition();
});
