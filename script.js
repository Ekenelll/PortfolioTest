document.addEventListener('DOMContentLoaded', function () {
    var allVideos = document.querySelectorAll('MainVideos');
    var titleOverlay = document.getElementById('videoTitle');

    function handleVideoEvents(video) {
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
    }

    allVideos.forEach(function (video) {
        handleVideoEvents(video);
    });
});
