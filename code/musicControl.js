const musicContainer = document.getElementById('audio-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const popupBar = document.getElementById('popup-bar');
const albumList = document.getElementById('album-list');
const songItem = document.getElementById('song-item');

// Keep track of song
let songIndex = 0;

// Song titles
const songsList = [
  {
    title: 'lenka',
    mp3: 'music/lenka.mp3',
    image: 'images/lenka.jpg',
  },
  {
    title: 'exhateme',
    mp3: 'music/exhateme.mp3',
    image: 'images/exhateme.jpg',
  },
  {
    title: 'exhateme',
    mp3: 'music/exhateme.mp3',
    image: 'images/exhateme.jpg',
  },
  {
    title: 'lenka',
    mp3: 'music/lenka.mp3',
    image: 'images/lenka.jpg',
  },
  {
    title: 'lenka',
    mp3: 'music/lenka.mp3',
    image: 'images/lenka.jpg',
  },
]



// Initially load song details into DOM
loadSong(songsList[songIndex]);

// Update song details
function loadSong(song) {
  changeSongTheme()
  title.innerText = song.title;
  audio.src = song.mp3;
  cover.src = song.image;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  changeSongTheme()

  popupBar.style.display = 'initial'
  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

//Choose song
function chooseSong() {
  loadSong(songsList[songIndex]);
  playSong();
}

//Change song
function changeSongTheme() {
  const oldSong = document.querySelector('.chosen-song');
  oldSong?.classList.remove("chosen-song");
  const newSong = document.querySelector(`div#id${songIndex}`);
  newSong?.classList.add("chosen-song");
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songsList.length - 1;
  }

  loadSong(songsList[songIndex]);
  changeSongTheme()

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songsList.length - 1) {
    songIndex = 0;
  }

  loadSong(songsList[songIndex]);
  changeSongTheme()

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration;
}



songsList.forEach((element, index) => {
  let div = document.createElement('div');
  div.setAttribute("id", `id${index}`);
  div.classList.add("song-item");
  div.innerHTML = `${index + 1}. ${element.title}`;
  changeSongTheme();

  div.onclick = function () {
    songIndex = index;
    changeSongTheme();
    chooseSong();
  };
  
  albumList.appendChild(div);

});

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Click on progress bar
// songItem.addEventListener('click', chooseSong);

