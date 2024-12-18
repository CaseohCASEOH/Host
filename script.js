// Get the audio element and the play/pause button
const audio = document.getElementById('background-music');
const playPauseButton = document.getElementById('play-pause');

// When the page loads, start the audio automatically
window.onload = () => {
  audio.play(); // Start playing the audio automatically
  playPauseButton.textContent = 'Pause'; // Change button text to "Pause"
};

// Play/Pause toggle
playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play(); // If audio is paused, play it
    playPauseButton.textContent = 'Pause'; // Change button text to "Pause"
  } else {
    audio.pause(); // If audio is playing, pause it
    playPauseButton.textContent = 'Play'; // Change button text to "Play"
  }
});
