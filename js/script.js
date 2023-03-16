
///////////////////////////////////////////////////////////////////////////////////
// Get all the accordion toggle buttons and add a click event listener to each one

var accordionToggles = document.querySelectorAll('.accordion-toggle');

accordionToggles.forEach(function(accordionToggle) {
  accordionToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    var accordionContent = this.parentElement.nextElementSibling;
    accordionContent.classList.toggle('active');
  });
});

/////////////////////////////////////////////////////////////////////////
// Handle toggleDrawer on mobile screens and other sm or md screens

function toggleDrawer() {
  const drawer = document.getElementById("drawer");
  drawer.classList.toggle("hidden");
}

/////////////////////////////////////////////////////////////////////////////
// Handle sticker class to the header whenever scroll reaches featured section

window.addEventListener('scroll', function() {
  var header = document.querySelector('#header');
  var heroSection = document.querySelector('#hero');

  if(window.pageYOffset > heroSection.offsetTop){
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});


/////////////////////////////////////////////////////////////
// Handle switching between dark and light mode on the page
function toggleDarkMode() {
  const htmlElement = document.documentElement;
  const isDark = htmlElement.classList.contains('dark');
  const sunIcon = document.querySelector('#ico-sun');
  const moonIcon = document.querySelector('#ico-moon');

  if (isDark) {
    htmlElement.classList.remove('dark');
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
    localStorage.setItem('mode', 'light');
  } else {
    htmlElement.classList.add('dark');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
    localStorage.setItem('mode', 'dark');
  }
}

const sunIcon = document.querySelector('#ico-sun');
const moonIcon = document.querySelector('#ico-moon');
let mode = localStorage.getItem('mode');

if (!mode) {
  // If the user hasn't set a preference yet, set the initial mode to "light".
  mode = 'light';
  localStorage.setItem('mode', 'light');
}

// Apply the user's preferred color mode to the page content
document.addEventListener('DOMContentLoaded', function() {
  if (mode === 'dark') {
    toggleDarkMode();
  }
  // Show the content now that the color mode has been applied
  document.body.style.visibility = 'visible';
});

// Set the initial display of the moon and sun icons based on the user's preferred color mode
if (mode === 'dark') {
  moonIcon.style.display = 'none';
  sunIcon.style.display = 'block';
} else {
  moonIcon.style.display = 'block';
  sunIcon.style.display = 'none';
}

sunIcon.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  if (isDark) {
    toggleDarkMode();
  }
});

sunIcon.addEventListener('click', toggleDarkMode);