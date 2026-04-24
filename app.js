// dark mode
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  const saved = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', saved);
 
  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
 
  //  video
  const placeholder = document.getElementById('videoPlaceholder');
  const player = document.getElementById('videoPlayer');
  const video = document.getElementById('mainVideo');
  const closeBtn = document.getElementById('closeVideo');
  const playBtn = document.getElementById('playBtn');
  const heroWatchBtn = document.getElementById('heroWatchBtn');
 
  function openVideo() {
    placeholder.classList.add('hidden');
    player.classList.add('active');
    video.play();
    player.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
 
  function closeVideo() {
    video.pause();
    video.currentTime = 0;
    player.classList.remove('active');
    placeholder.classList.remove('hidden');
  }
 
  playBtn.addEventListener('click', openVideo);
  placeholder.addEventListener('click', openVideo);
  closeBtn.addEventListener('click', (e) => { e.stopPropagation(); closeVideo(); });
  heroWatchBtn.addEventListener('click', () => {
    openVideo();
    document.querySelector('.video-wrap').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && player.classList.contains('active')) closeVideo();
  });
 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
 

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  let cards = document.querySelectorAll('.s-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});


const track = document.querySelector('.carousel-track');
let index = 0;

setInterval(() => {
    index++;
    if (index > 2) index = 0;

    track.style.transform = `translateX(-${index * 220}px)`;
}, 2000);


document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
 
      if (!isOpen) item.classList.add('open');
    });
  });