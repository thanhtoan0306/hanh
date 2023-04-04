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
    title: 'Lenka',
    mp3: 'music/lenka.mp3',
    image: 'images/lenka.jpg',
  },
  {
    title: 'Ex hate me',
    mp3: 'music/exhateme.mp3',
    image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/5508f6b8066b4e86a169705a81966add~tplv-dmt-logom:tos-useast2a-pv-0037-aiso/07181b512c5f489785bff8c952ea978c.image?x-expires=1680642000&x-signature=M7rRwmzprrxQxQinI%2FBdDh22SdY%3D',
  },
  {
    title: 'Chuyện đôi ta',
    mp3: 'https://v77.tiktokcdn.com/3348253cf4f276879770709800fe461b/642c4b5e/video/tos/useast2a/tos-useast2a-v-27dcd7-aiso/oQmS1zDoQGgHakhbc2eeHdu7yLxYfoEcnEeTcG/?a=1180&ch=0&cr=0&dr=0&er=2&cd=0%7C0%7C0%7C0&br=250&bt=125&mime_type=audio_mpeg&qs=6&rc=NWhkNjgzOzw7NDRpaDtlOEBpanRrNjY6ZnB4aTMzZjU8M0A2Yi0xNS8zXzUxX2FgXi1hYSNwb2U0cjRnbC5gLS1kMWNzcw%3D%3D&l=2023040415065829988BF39834D5272779&btag=80000&cc=13&ft=d2A~l-Inz7TabKNfiyq8Z&download=true',
    image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/20c085636cff4ffbb11f080968332e36_1673784407~tplv-dmt-logom:tos-useast2a-pv-0037-aiso/03ca30475ba84229b836ee260c6eed5f.image?x-expires=1680642000&x-signature=8zHkrW14R%2Fhao6wJLU%2BMLKAlhyo%3D',
  },
  {
    title: 'Ghé qua',
    mp3: 'https://v16m.tiktokcdn.com/d8b9ef2776d79ac67c84b5c6bdf71f82/642c4f87/video/tos/useast2a/tos-useast2a-v-27dcd7-aiso/2ef0b8d0c9a340409dac84eb85f9c100/?a=1180&ch=0&cr=0&dr=0&er=2&cd=0%7C0%7C0%7C0&br=250&bt=125&mime_type=audio_mpeg&qs=6&rc=NGg4Nzg0NDZoaDdkNGk5OUBpajg3eWk6ZjM3ZzMzZjU8M0A2MjI2Y2FiXy0xY2IuNF9fYSNgXzBtcjRnNi1gLS1kMWNzcw%3D%3D&l=20230404152427119160C6CCA02303EB67&btag=80000&cc=3&ft=d2A~l-Inz7TnjVNfiyq8Z&download=true',
    image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/59a78e8ae61149328a42afd7df6b3811_1665156226~tplv-f5insbecw7-1:480:480.jpeg?x-expires=1680642000&x-signature=dMyx0INEP6bPfWC9OHSPygv3ivE%3D',
  },
  {
    title: 'Last Christmas',
    mp3: 'https://v16m.tiktokcdn.com/6945ede891d1494b20595452c3406071/642c512a/video/tos/useast2a/tos-useast2a-v-27dcd7-aiso/oAIDUQGOTM3BEVnIf88Ob3yfwRdofDBgepmkEc/?a=1180&ch=0&cr=0&dr=0&er=2&cd=0%7C0%7C0%7C0&br=250&bt=125&mime_type=audio_mpeg&qs=6&rc=ZzgzOjU8NjhkOjpnNTQzN0BpM3F4eTo6ZmltajMzZjU8M0BgNF4wMi4vX14xLTYyYDViYSNsZ3JjcjRvMS5gLS1kMWNzcw%3D%3D&l=20230404153121208FFDA4302110049019&btag=80000&cc=3&ft=d2A~l-Inz7T21VNfiyq8Z&download=true',
    image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/4e3cd23004c34994a2a683bcee73818e_1677931071~tplv-dmt-logom:tos-useast2a-pv-0037-aiso/05e8f5789c0c4b53874e2c8806438111.image?x-expires=1680642000&x-signature=bK9qNI9o5ael3gN7pTHJxBvYezA%3D',
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

