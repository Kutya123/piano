const pads = document.querySelectorAll(".pad");

pads.forEach(pad => {
  pad.addEventListener("click", () => {
    playSound(pad);
  });
});

document.addEventListener("keydown", (e) => {
  const pad = document.querySelector(`.pad[data-key="${e.key}"]`);
  if (pad) playSound(pad);
});

function playSound(pad) {
  const soundId = pad.dataset.sound;
  const audio = document.getElementById(soundId);

  audio.currentTime = 0;
  audio.play();

  pad.classList.add("active");
  setTimeout(() => {
    pad.classList.remove("active");
  }, 120);
}
