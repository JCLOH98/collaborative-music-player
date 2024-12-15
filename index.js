

const test_mp3_link = "https://cdn.pixabay.com/audio/2024/09/24/audio_8ef91c0362.mp3"
const test_mp4_link = "https://cdn.pixabay.com/video/2020/01/05/30902-383991325_large.mp4"
const test_youtube_link = "https://www.youtube.com/watch?v=Kq0i9wAnxFg"
const test_soundcloud_link = "https://soundcloud.com/fm_freemusic/rain-music-for-relaxing-calming-and-meditation-by-oleg-mazur-free-download?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"

const play = () => {
    console.log("play")
    // YouTube // mp4
    let prev_src = document.getElementById("music-player-content").src;
    while (prev_src.includes('?autoplay=1')) {
        prev_src = prev_src.replace('?autoplay=1', '');
    }
    while (prev_src.includes('?autoplay=0')) {
        prev_src = prev_src.replace('?autoplay=0', '');
    }
    document.getElementById("music-player-content").src = prev_src+"?autoplay=1";

    // Soundcloud

    // mp3

    
}
const pause = () => {
    console.log("pause")
    // YouTube 

    // Soundcloud

    // mp3


    // mp4

}
const previous = () => {}
const next = () => {}

document.getElementById("play").addEventListener("click", play);
document.getElementById("pause").addEventListener("click", pause);
