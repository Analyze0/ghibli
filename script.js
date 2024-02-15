const backgroundSfx = new Audio('bg-sfx.mp3');
backgroundSfx.loop = true;
document.onmousedown = function() {
  backgroundSfx.play();
}

document.addEventListener('mousemove', function(e) {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.getElementById('one').style.transform = `translate(${x * 50}px, ${y * 50}px)`;
  document.getElementById('two').style.transform = `translate(${x * 30}px, ${y * 30}px)`;
  document.getElementById('three').style.transform = `translate(${-x * 20}px, ${-y * 20}px)`;
  document.getElementById('four').style.transform = `translate(${-x * 10}px, ${-y * 10}px)`;
});

let dots = 0;
setInterval(() => {
  const loadingText = document.querySelector('h1');
  loadingText.textContent = `読み込み中${'.'.repeat(dots)}`;
  dots = (dots + 1) % 4;
}, 500);

setTimeout(() => {
   document.getElementById('overlay').style.opacity = '0%';
}, 3000);