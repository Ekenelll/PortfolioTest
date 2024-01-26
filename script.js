document.addEventListener('DOMContentLoaded', function() {
    // Get the video element
    const video = document.querySelector('.main-video');

    // Get the buttons
    const volumeBtn = document.getElementById('volumeBtn');
    const pauseBtn = document.getElementById('pauseBtn');

    // Add event listeners
    volumeBtn.addEventListener('click', function() {
        // Prompt the user to enter a volume level
        const newVolume = prompt('Enter volume level (0-1):');
        
        // Update the video volume if a valid value is entered
        if (newVolume !== null && !isNaN(newVolume)) {
            video.volume = Math.min(1, Math.max(0, parseFloat(newVolume)));
        }
    });

    pauseBtn.addEventListener('click', function() {
        // Toggle between play and pause
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
