// Music Controls
const music = document.getElementById('background-music');
const playPauseBtn = document.getElementById('play-pause');
const volumeControl = document.getElementById('volume-control');

// Autoplay Music on Page Load
window.addEventListener('DOMContentLoaded', () => {
  music.volume = 100; // Set initial volume

  // Attempt autoplay
  music.play().then(() => {
    playPauseBtn.textContent = 'Pause; // Update button if autoplay works
  }).catch(() => {
    playPauseBtn.textContent = 'Play'; // Fallback if autoplay is blocked
  });
});

// Toggle Play/Pause
playPauseBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    music.pause();
    playPauseBtn.textContent = 'Play';
  }
});

// Adjust Volume
volumeControl.addEventListener('input', (e) => {
  music.volume = e.target.value / 100;
});
