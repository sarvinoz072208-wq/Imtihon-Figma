const watchBtn = document.getElementById("watchBtn");
const card = document.getElementById("card");
const darkToggle = document.getElementById("darkToggle");

watchBtn.addEventListener("click", () => {
  card.innerHTML = `
    <video controls autoplay>
      <source src="video.mp4" type="video/mp4">
    </video>
  `;
});

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});