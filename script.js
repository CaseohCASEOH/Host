// Music Controls
const music = document.getElementById('background-music');
const playPauseBtn = document.getElementById('play-pause');
const volumeControl = document.getElementById('volume-control');

// Function to start music automatically (autoplay workaround)
window.addEventListener('DOMContentLoaded', () => {
  music.volume = 0.5; // Set initial volume
  music.play().catch(() => {
    playPauseBtn.textContent = 'Play'; // If autoplay is blocked
  });
});

// Toggle Play/Pause functionality
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

// Snow Effect (simple implementation)
document.addEventListener('DOMContentLoaded', () => {
  let snowContainer = document.getElementById('snow-container');

  // Create 100 snowflakes
  for (let i = 0; i < 100; i++) {
    let snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.animationDelay = `${Math.random() * 5}s`;
    snowContainer.appendChild(snowflake);
  }
});

// Snowflake CSS animation
const snowflakeStyle = document.createElement('style');
snowflakeStyle.innerHTML = `
  .snowflake {
    position: absolute;
    top: -10px;
    width: 5px;
    height: 5px;
    background-color: white;
    border-radius: 50%;
    opacity: 0.8;
    animation: snowfall linear infinite;
  }

  @keyframes snowfall {
    0% { top: -10px; }
    100% { top: 100%; }
  }
`;

document.head.appendChild(snowflakeStyle);
