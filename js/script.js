
///////////////////////////////////////////////////////////////////////////////////
// Get all the accordion toggle buttons and add a click event listener to each one

var accordionToggles = document.querySelectorAll('.accordion-toggle');

accordionToggles.forEach(function(accordionToggle) {
  accordionToggle.addEventListener('click', function() {
    // Toggle the active class on the accordion toggle button
    this.classList.toggle('active');
    // Get the next sibling of the accordion header (which is the accordion content) and toggle the active class on it
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
// Handle sticker class to the header whenever scroll reaches about section
window.addEventListener('scroll', function() {
  var header = document.querySelector('#header');
  var heroSection = document.querySelector('#hero');
  var aboutSection = document.querySelector('#about');

  if (window.pageYOffset > aboutSection.offsetTop) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
