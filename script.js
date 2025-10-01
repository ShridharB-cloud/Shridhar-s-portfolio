// Scroll arrow functionality
const scrollIndicator = document.querySelector(".scroll-indicator");
const skillsSection = document.getElementById("skills");
scrollIndicator.addEventListener("click", () => {
  skillsSection.scrollIntoView({ behavior: "smooth" });
});

// Skill Bar Animation on Scroll
const bars = document.querySelectorAll(".bar span");
window.addEventListener("scroll", () => {
  bars.forEach((bar) => {
    const top = bar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 50) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});

// Hero Background Canvas (white + blue particles)
const canvas = document.getElementById("hero-bg");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const colors = ["#00ffff", "#ffffff"]; // white & blue particles

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  particlesArray = [];
  for (let i = 0; i < 120; i++) {
    particlesArray.push(new Particle());
  }
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
init();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});
