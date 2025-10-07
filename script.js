// Flickity initialization
var elem = document.querySelector('.main-carousel');
if (elem) {
  var flkty = new Flickity(elem, {
    cellAlign: 'center',
    wrapAround: true,
    autoPlay: 5000,
    imagesLoaded: true,
    pageDots: true
  });
}

// Countdown clock
function updateCountdown() {
  // Countdown to ceremony time: Feb 7 2026 17:00 EST
  var eventDate = new Date('2026-02-07T17:00:00-05:00').getTime();
  var now = new Date().getTime();
  var distance = eventDate - now;

  if (distance < 0) {
    document.getElementById('countdown').innerHTML = 'The celebration has begun!';
    clearInterval(timer);
    return;
  }

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `
    <span>${days}<small>Days</small></span>
    <span>${hours}<small>Hours</small></span>
    <span>${minutes}<small>Minutes</small></span>
    <span>${seconds}<small>Seconds</small></span>
  `;
}

var timer = setInterval(updateCountdown, 1000);
updateCountdown();
