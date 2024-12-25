

const test_mp3_link = "https://cdn.pixabay.com/audio/2024/09/24/audio_8ef91c0362.mp3"
const test_mp4_link = "https://cdn.pixabay.com/video/2020/01/05/30902-383991325_large.mp4"
const test_youtube_link = "https://www.youtube.com/watch?v=Kq0i9wAnxFg"
const test_youtube_link2 = "https://www.youtube.com/watch?v=DSWYAclv2I8"
const test_youtube_link3 = "https://www.youtube.com/watch?v=rKi3oL2UDew"
const test_soundcloud_link = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1298479873&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
const test_soundcloud_link2 = "https%3A//api.soundcloud.com/tracks/1100286886&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
const test_soundcloud_link3 = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1578887346&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"

let playlist_list = [];
// playlist_list.push(test_mp3_link);
// playlist_list.push(test_mp4_link);
// playlist_list.push(test_youtube_link);
playlist_list.push(test_soundcloud_link);
playlist_list.push(test_soundcloud_link2);
playlist_list.push(test_soundcloud_link3);
// playlist_list.push(test_youtube_link);
// playlist_list.push(test_youtube_link2);
// playlist_list.push(test_youtube_link3);

let current_playlist_idx = -1;
let media_content = document.getElementById("media-content");

const play = () => {
    console.log("play")
    document.getElementById("vinyl-disc").classList.add("animate-spin");

    const current_media = playlist_list[current_playlist_idx];
    if (current_media != "") {
        if (current_media.includes("youtube")) { //youtube
            youtube_player.playVideo();
        }
        else if (current_media.includes("soundcloud")) { //soundcloud
            soundcloud_player.play();
        }
        else if (current_media.includes("mp3")) { //mp3
            showMedia("mp3-player");

        }
        else if (current_media.includes("mp4")) { //mp4
            showMedia("mp4-player");

        }
    }

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
    document.getElementById("vinyl-disc").classList.remove("animate-spin");

    const current_media = playlist_list[current_playlist_idx];
    if (current_media != "") {
        if (current_media.includes("youtube")) { //youtube
            youtube_player.pauseVideo();
        }
        else if (current_media.includes("soundcloud")) { //soundcloud
            soundcloud_player.pause();
        }
        else if (current_media.includes("mp3")) { //mp3
            showMedia("mp3-player");
        }
        else if (current_media.includes("mp4")) { //mp4
            showMedia("mp4-player");

        }
    }

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
const previous = () => {
    if (current_playlist_idx > 0) {
        current_playlist_idx --;
    }
    updateMedia();
}
const next = () => {
    if (current_playlist_idx < playlist_list.length-1) {
        current_playlist_idx ++;
    }
    updateMedia();
}
const add = (name="") => {
    const playlist = document.getElementById("playlist");
    
    let playlist_item = document.createElement("div");
    playlist_item.classList.add("playlist-item");

    let playlist_input = document.createElement("input");
    if (name !== "" && !(name instanceof Event)) {
        playlist_input.value = name;
    }
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
}
const refresh = () => {
    // stop all previous option

    // update current_playlist_idx
    // show it
    updateMedia();
}


///
///
/// Functions
///
///

const autoScrollCalculation = () => {
    const scrollingContainer = document.getElementById("now-playing-container");
    const scrollingText = document.getElementById("now-playing-text");

    const textWidth = scrollingText.offsetWidth;
    const containerWidth = scrollingContainer.offsetWidth;

    console.log(textWidth,containerWidth);
    
    // If the text is smaller than the container, don't apply scrolling
    if (textWidth > containerWidth) {
        // Calculate the total scroll distance (text width + container width)
        const scrollDistance = textWidth + containerWidth;

        // Set desired speed (in pixels per second) – e.g., 50 pixels per second
        const scrollSpeed = 50;

        // Calculate duration in seconds based on scroll distance and speed
        const duration = scrollDistance / scrollSpeed;

        // Apply the calculated duration to the animation
        scrollingText.style.animation = `autoscroll ${duration}s linear infinite`;
    }
    else {
        // If there's no overflow, no animation is applied
        scrollingText.style.animation = 'none';
    }
}

const updateYoutubeDiv = (link="") => {
    youtube_player.loadVideoById(link);
    // setTimeout(()=> {
    //     youtube_player.pauseVideo();
    // },500);
}

const updateSoundCloudDiv = (link="") => {
    console.log("updateSoundCloudDiv")
    // use regex to find the track
    const regex = /tracks\/\d+/;
    const match = link.match(regex);
    if (match) {
        console.log("Extracted Track Path:", match[0]);  // "tracks/1943072631"
    } else {
        console.log("No match found.");
    }

    //replace the original
    soundcloud_player.load(`https://w.soundcloud.com/${match[0]}`, {
        auto_play: true,
        color: "#ff5500",
        hide_related: false,
        show_comments: true,
        show_user: true,
        show_reposts: false,
        show_teaser: true,
        visual: true
      });
}

const hideAllMedia = () => {
    document.getElementById("youtube-player").classList.add("hide-player");
    document.getElementById("soundcloud-player").classList.add("hide-player");
    document.getElementById("mp3-player").classList.add("hide-player");
    document.getElementById("mp4-player").classList.add("hide-player");
}

const showMedia = (id="") => {
    document.getElementById(id).classList.add("show-player");
    document.getElementById(id).classList.remove("hide-player");
}

function getYoutubeTitle(i) {
    if (i >= 5) return; // Stop after 5 attempts

    setTimeout(() => {
        const title = document.getElementById("youtube-player").getAttribute("title");

        if (title && title !== "YouTube video player") {
            document.getElementById("now-playing").innerText = title;
            autoScrollCalculation();
            return; // Exit the function when the title is found
        }

        // Recursively call the function to try again after 500ms
        getYoutubeTitle(i + 1);
    }, 500);
}


const updateMedia = () => {
    const current_media = playlist_list[current_playlist_idx];
    if (current_media != "") {
        pause();
        hideAllMedia();

        if (current_media.includes("youtube")) { //youtube link
            showMedia("youtube-player");
            updateYoutubeDiv(current_media.replace("https://www.youtube.com/watch?v=",""));
            getYoutubeTitle(0); //starts from 0 time
            play();
        }
        else if (current_media.includes("soundcloud")) { //soundcloud
            console.log("is soundcloud link")
            showMedia("soundcloud-player");
            updateSoundCloudDiv(current_media);
            play();

        }
        else if (current_media.includes("mp3")) { //mp3
            showMedia("mp3-player");

        }
        else if (current_media.includes("mp4")) { //mp4
            showMedia("mp4-player");

        }
    }
}



document.getElementById("play").addEventListener("click", play);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("previous").addEventListener("click", previous);
document.getElementById("next").addEventListener("click", next);

// playlist controls
document.getElementById("add").addEventListener("click", add);
document.getElementById("refresh").addEventListener("click",refresh);

// testing playlist 
for (playlist of playlist_list) {
    add(playlist);
}
if (playlist_list.length > 0) {
    current_playlist_idx = 0;
}