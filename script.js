// Function to toggle dark mode
document.getElementById('darkModeButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Function to reveal the invitation letter
document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('letter').style.display = 'flex';
});

// Function to close the invitation letter
document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('letter').style.display = 'none';
    document.getElementById('cover').style.display = 'flex';
});
