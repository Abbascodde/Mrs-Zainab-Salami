// Hide intro page and show main site on button click
document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const enterBtn = document.getElementById('enterBtn');

  enterBtn.addEventListener('click', () => {
    intro.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      intro.style.display = 'none';
    }, 700); // matches transition duration
  });
});
