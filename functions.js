const music = document.getElementById('background-music');
const playpausebutton = document.getElementById('play-pause');
const volumecontrol = document.getElementById('volume-control');

playpausebutton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playpausebutton.textContent = 'Pause';
  } else {
    music.pause();
    playpausebutton.textContent = 'Play';
  }
});

volumecontrol.addEventListener('input', (event) => {
  music.volume = event.target.value;
});

const snowcontainer = document.getElementById('snow-container');

function createsnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  snowflake.style.opacity = Math.random();
  snowcontainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

setInterval(createsnowflake, 100);
