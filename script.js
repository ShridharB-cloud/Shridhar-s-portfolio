// Animate skill bars on scroll
window.addEventListener('scroll', function() {
  const skillBars = document.querySelectorAll('.bar span');
  const triggerBottom = window.innerHeight;
  skillBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    if(barTop < triggerBottom) {
      bar.style.width = bar.getAttribute('data-width');
    }
  });
});

// Hero background animation
const canvas = document.getElementById('hero-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let dots = [];
for(let i=0;i<100;i++){
  dots.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*2+1, dx:Math.random()*0.5-0.25, dy:Math.random()*0.5-0.25});
}
function animateDots(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  dots.forEach(dot=>{
    ctx.beginPath();
    ctx.arc(dot.x,dot.y,dot.r,0,Math.PI*2);
    ctx.fillStyle='rgba(255,255,255,0.7)';
    ctx.fill();
    dot.x += dot.dx; dot.y += dot.dy;
    if(dot.x<0||dot.x>canvas.width) dot.dx*=-1;
    if(dot.y<0||dot.y>canvas.height) dot.dy*=-1;
  });
  requestAnimationFrame(animateDots);
}
animateDots();
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
