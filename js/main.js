//Different smooth scroll functions (x = duration) 
//For more options visit: https://easings.net/en#
function easeOutSine(x) {
    return Math.sin((x * Math.PI) / 2);
}

function defaultease(x){
    return Math.min(1, 1.001 - Math.pow(2, -10 * x));
}


  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault(); // Prevent form submission
        event.stopPropagation(); // Stop form from closing offcanvas
      }

      form.classList.add('was-validated'); // Add Bootstrap validation class for visual feedback
    }, false);
  }); 
 
const gallery = document.querySelector('.cc-portfolio');
const track = document.querySelector('.cc-portfolio-gallery-wrap');
const cards = document.querySelectorAll('.cc-portfolio-card');
const easing = 0.02;
let startY = 0;
let endY = 0;
let raf;

const lerp = (start,end,t) => start * (1-t) + end * t;

function updateScroll() {
  startY = lerp(startY,endY,easing);
  /*gallery.style.height = `${track.clientHeight}px`; 
  track.style.transform = `translateY(-${startY}px)`;*/
  activateParallax();
  raf = requestAnimationFrame(updateScroll);
  if (startY.toFixed(1) === window.scrollY.toFixed(1)) cancelAnimationFrame(raf);
}

function startScroll() {
  endY = window.scrollY; 
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(updateScroll);
}

function parallax(card) {
  const wrapper = card.querySelector('.cc-card-image-wrap');
  const diff = card.offsetHeight - wrapper.offsetHeight;
  const {top} = card.getBoundingClientRect();
  const progress = top / window.innerHeight;
  const yPos = diff * progress;
  wrapper.style.transform = `translateY(${yPos}px)`;
}

const activateParallax = () => cards.forEach(parallax);

function init() {
  activateParallax();
  startScroll();
}

window.addEventListener('load',updateScroll,false);
window.addEventListener('scroll',init,false);
window.addEventListener('resize',updateScroll,false);