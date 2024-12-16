

const test_mp3_link = "https://cdn.pixabay.com/audio/2024/09/24/audio_8ef91c0362.mp3"
const test_mp4_link = "https://cdn.pixabay.com/video/2020/01/05/30902-383991325_large.mp4"
const test_youtube_link = "https://www.youtube.com/watch?v=Kq0i9wAnxFg"
const test_soundcloud_link = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1943072631&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"

let playlist_list = [];
playlist_list.push(test_mp3_link);
playlist_list.push(test_mp4_link);
playlist_list.push(test_youtube_link);
playlist_list.push(test_soundcloud_link);

const play = () => {
    console.log("play")
    // YouTube 
    // youtube_player.playVideo();

    // Soundcloud
    // const widget = SC.Widget(document.getElementById("soundcloud-player"));
    // widget.play();

    // mp3
    // document.getElementById("mp3-player").play()

    // mp4
    // document.getElementById("mp4-player").play()
    
}
const pause = () => {
    console.log("pause")
    // YouTube 
    // youtube_player.pauseVideo();

    // Soundcloud
    // const widget = SC.Widget(document.getElementById("soundcloud-player"));
    // widget.pause();

    // mp3
    // document.getElementById("mp3-player").pause()

    // mp4
    // document.getElementById("mp4-player").pause()

}
const previous = () => {}
const next = () => {}

const add = () => {
    const playlist = document.getElementById("playlist");
    
    let playlist_item = document.createElement("div");
    playlist_item.classList.add("playlist-item");

    let playlist_input = document.createElement("input");
    playlist_input.title = "playlist link";
    playlist_input.classList.add("playlist-link");

    let delete_button = document.createElement("button");
    delete_button.title = "delete playlist item";
    delete_button.classList.add("delete-button")
    delete_button.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    delete_button.addEventListener("click",()=>{
        playlist_item.remove();
    })

    playlist_item.appendChild(playlist_input);
    playlist_item.appendChild(delete_button);

    playlist.appendChild(playlist_item);    

    // debug use
    // const randomNum = Math.random();
    // playlist_input.value = randomNum;
    // playlist_list.push(randomNum);
    // console.log(playlist_list);
}
document.getElementById("play").addEventListener("click", play);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("add").addEventListener("click", add);
