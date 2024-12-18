// Music Controls
const music = document.getElementById('background-music');
const playPauseBtn = document.getElementById('play-pause');
const volumeControl = document.getElementById('volume-control');

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
  music.volume = e.target.value;
});

// Start Music on Load (Optional)
window.addEventListener('DOMContentLoaded', () => {
  music.volume = 0.5;
  music.play().catch(() => {
    playPauseBtn.textContent = 'Play'; // If autoplay is blocked
  });
});

// Snow Effect
const snowContainer = document.getElementById('snow-container');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
  snowflake.style.opacity = Math.random();
  snowContainer.appendChild(snowflake);

  // Remove snowflake after animation
  setTimeout(() => snowflake.remove(), 5000);
}

setInterval(createSnowflake, 100);
