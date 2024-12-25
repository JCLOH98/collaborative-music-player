
let soundcloud_iframe = document.getElementById("soundcloud-player");
let soundcloud_player = SC.Widget(soundcloud_iframe);

function getSoundCloudTitle(){
    soundcloud_player.getCurrentSound(function(sound) {
        
        let title = "";
        // console.log(sound)
        if (sound.title) {
            title += sound.title
        }
        
        if (sound.publisher_metadata.artist){
            title += " - " + sound.publisher_metadata.artist
        }
        document.getElementById("now-playing").innerText = title;
        autoScrollCalculation();
    });
}


// Listen for the "play" event (when track starts playing)
soundcloud_player.bind(SC.Widget.Events.PLAY, function() {
    console.log('SC Track started playing');
    getSoundCloudTitle();
    // alert("SC play");
});

// Listen for the "pause" event (when track is paused)
soundcloud_player.bind(SC.Widget.Events.PAUSE, function() {
    console.log('SC Track paused');
    // alert("SC pause");
});

// Listen for the "finish" event (when track finishes playing)
soundcloud_player.bind(SC.Widget.Events.FINISH, function() {
    console.log('SC Track has finished playing');
    // alert("SC done");
});