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
const durationCurrent = document.getElementById('duration')

// Keep track of song
let songIndex = 0;

// Song titles
const songsList = [
  {
    title: 'Happy birthday to Hanh 🎁',
    mp3: 'music/happy.mp3',
    image: 'images/gift9.jpeg',
  },
  {
    title: 'Ex hate me',
    mp3: 'music/exhateme.mp3',
    image: 'images/exhateme2.jpeg',
  },
  {
    title: 'Last Christmas',
    mp3: 'music/lastchristmas.mp3',
    image: 'images/lastchristmas.jpeg',
  },

  {
    title: 'Chuyện đôi ta',
    mp3: 'music/chuyendoita.mp3',
    image: 'images/chuyendoita.jpeg',
  },
  {
    title: 'Ghé qua',
    mp3: 'music/ghequa.mp3',
    image: 'images/ghequa.jpeg',
  },
  {
    title: 'The show - Lendka',
    mp3: 'music/lenka.mp3',
    image: 'images/lenka.jpg',
  },
  {
    title: '3107-1',
    mp3: 'music/3107.mp3',
    image: 'images/3107.jpeg',
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

// INit song
function initSong() {
  songIndex = 0;
  loadSong(songsList[songIndex]);
  changeSongTheme()

  playSong();
}
function formatCurrentDuration(cur, dur) {
  const minCur = Math.floor(cur / 60).toString().padStart(2, '0');;
  const secCur = Math.floor(cur % 60).toString().padStart(2, '0');;
  const minDur = Math.floor(dur / 60).toString().padStart(2, '0');;
  const secDur = Math.floor(dur % 60).toString().padStart(2, '0');;
  outputTime = `${minCur}:${secCur}/${minDur}:${secDur}`
  return outputTime
}
// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  console.log(currentTime + '/' + duration);
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  durationCurrent.innerHTML = formatCurrentDuration(currentTime || 0, duration || 0);
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration;
}

function closePopupBar() {
  popupBar.style.display = 'none';
  pauseSong();
}


songsList.forEach((element, index) => {
  let div = document.createElement('div');
  div.setAttribute("id", `id${index}`);
  div.classList.add("song-item");
  div.innerHTML = `<div>${index + 1}. ${element.title}</div>🍀</div>`;
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

initSong();//

