console.log("Welcome to Spotiffy");

//initializing variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songName = document.getElementsByClassName('songName');
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'))
let masterSongName = document.getElementById('masterSongName');

let songs = [
    { songName: "Let me love you", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Naruto Endings", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Naruto Openings", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "name4", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "name5", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "name6", filePath: "song/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "name7", filePath: "song/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "name8", filePath: "song/8.mp3", coverPath: "covers/8.jpg" },
]

songItems.forEach((ele, i) => {
    ele.getElementsByTagName('img')[0].src = songs[i].coverPath;
    ele.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    //songg = new Audio(songs[i].filePath);
    //ele.getElementsByClassName('timeStamp')[0].innerText = songg.duration;
})

//audioElement.play();

//handle play/pause click
// masterPlay.addEventListener('click', () => {
//     if (audioElement.paused || audioElement.currentTime === 0) {
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     } else {
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// })

//listen to events
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration) / 100);
})

const makeAllPlays = () => {
    songItemPlay.forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

function pauseSong() {
    audioElement.pause();

}

function playSong(songIndex) {
    if (!audioElement.paused) {
        pauseSong();
    }

    audioElement = new Audio(`songs/${songIndex}.mp3`);
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

}

function playSong(idx) {
    makeAllPlays();

    if (audioElement.paused || audioElement.currentTime === 0) {
        audioElement.src = `songs/${idx+1}.mp3`;
        console.log("firse play");
        audioElement.play();
        document.getElementById(idx).classList.remove('fa-play-circle');
        document.getElementById(idx).classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    } else {
        console.log("band kar");
        //audioElement.src = `songs/${idx+1}.mp3`;
        audioElement.pause();
        document.getElementById(idx).classList.remove('fa-pause-circle');
        document.getElementById(idx).classList.add('fa-play-circle');
        gif.style.opacity = 0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
    masterSongName.innerText = songs[idx].songName;

}

// songItemPlay.forEach((element) => {

//     element.addEventListener('click', (e) => {
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);

//         if (audioElement.paused || audioElement.currentTime === 0) {
//             audioElement.src = `songs/${songIndex}.mp3`;
//             console.log("firse play");
//             audioElement.play();
//             e.target.classList.remove('fa-play-circle');
//             e.target.classList.add('fa-pause-circle');
//             gif.style.opacity = 1;
//             masterPlay.classList.remove('fa-play-circle');
//             masterPlay.classList.add('fa-pause-circle');
//         } else {
//             console.log("band kar");
//             audioElement.src = `songs/${songIndex}.mp3`;
//             audioElement.pause();
//             e.target.classList.remove('fa-pause-circle');
//             e.target.classList.add('fa-play-circle');
//             gif.style.opacity = 0;
//             masterPlay.classList.remove('fa-pause-circle');
//             masterPlay.classList.add('fa-play-circle');
//         }
//         masterSongName.innerText = songs[songIndex - 1].songName;
//     })

// })

document.getElementById('next').addEventListener('click', () => {
    if (songIndex < 7) {
        songIndex += 1;
    } else {
        songIndex = 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex = 0) {
        songIndex = 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    console.log(document.getElementById(songIndex));
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})