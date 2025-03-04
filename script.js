document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('letter').style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('letter').style.display = 'none';
    document.getElementById('cover').style.display = 'flex';
});
