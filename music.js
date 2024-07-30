document.addEventListener('DOMContentLoaded', function() {
    // Create an audio element dynamically
    var audio = document.createElement('audio');
    audio.src = 'audio.mp3';
    audio.loop = true;
    audio.style.display = 'none'; // Hide the audio controls

    // Append the audio element to the body
    document.body.appendChild(audio);

    function playAudio() {
        var playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.then(function() {
                // Automatic playback started!
                console.log('Autoplay started successfully');
            }).catch(function(error) {
                // Auto-play was prevented
                // Show a UI element to let the user manually start playback
                console.log('Autoplay was prevented');
                alert('Please click anywhere on the page to start the background music.');
                document.body.addEventListener('click', function() {
                    audio.play();
                }, { once: true });
            });
        }
    }

    // Attempt to play audio on page load
    playAudio();

    // Also, try playing audio when the page visibility changes (for some cases where DOMContentLoaded may not be sufficient)
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            playAudio();
        }
    });
});