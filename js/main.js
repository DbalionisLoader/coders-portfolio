//Different smooth scroll functions (x = duration) 
//For more options visit: https://easings.net/en#
function easeOutSine(x) {
    return Math.sin((x * Math.PI) / 2);
}

function defaultease(x){
    return Math.min(1, 1.001 - Math.pow(2, -10 * x));
}


/*  smooth scrolling functionality

    1. duration:
        - Specifies the duration of the smooth scroll animation 
        - in seconds
    2. easing:
        - Determines the easing function (ref easing.net)
        - Uses duration to calculate the rate of change on smooth scroll animation    
*/
const lenis = new Lenis({
    duration: 1.4,
    easing: defaultease,
    smooth: true,
});

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)


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