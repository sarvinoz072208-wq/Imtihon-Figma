const watchBtn = document.getElementById("watchBtn");
const container = document.getElementById("container");
const darkToggle = document.getElementById("darkModeToggle");

// VIDEO chiqishi
watchBtn.addEventListener("click", () => {
  container.innerHTML = `
    <video controls autoplay>
      <source src="video.mp4" type="video/mp4">
      Your browser does not support video.
    </video>
  `;
});

// DARK MODE
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});