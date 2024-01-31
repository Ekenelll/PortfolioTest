document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('mainVideo');
    var titleOverlay = document.getElementById('videoTitle');

    video.addEventListener('play', function () {
        titleOverlay.style.display = 'none';
    });

    video.addEventListener('pause', function () {
        titleOverlay.style.display = 'block';
    });

    // Add an additional event listener for 'ended' to show the title when the video ends
    video.addEventListener('ended', function () {
        titleOverlay.style.display = 'block';
    });
});