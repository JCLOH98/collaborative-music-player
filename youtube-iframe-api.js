// Create a YouTube player
var youtube_player;

// This function is called when the YouTube API is ready
function onYouTubeIframeAPIReady() {
    youtube_player = new YT.Player('youtube-player', {
        height: '250',
        width: '250',
        videoId: 'Kq0i9wAnxFg',  // Replace with the YouTube video ID
        events: {
            // 'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange  // Listen for state changes (e.g., video finished)
        }
    });
}

// This function is called when the player is ready
// function onPlayerReady(event) {
//     var duration = event.target.getDuration();  // Get video duration in seconds
//     var minutes = Math.floor(duration / 60);
//     var seconds = Math.floor(duration % 60);
//     document.getElementById('video-duration').innerText = `Video Duration: ${minutes} minutes ${seconds} seconds`;
// }

// This function is called when the player's state changes (e.g., video ends)
function onPlayerStateChange(event) {
    // State codes:
    // 1 = Playing
    // 2 = Paused
    // 0 = Ended
    if (event.data == YT.PlayerState.PLAYING) {
        console.log('Video is playing!');
    }
    if (event.data == YT.PlayerState.PAUSED) {
        console.log('Video is paused!');
    }
    if (event.data == YT.PlayerState.ENDED) {
        console.log("Video has finished playing!");
    }
}