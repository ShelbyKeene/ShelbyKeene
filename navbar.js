// Get references to the navigation links and the content div
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const projectLink = document.getElementById('projects-link');
const contactLink = document.getElementById('contact-link');
const contentDiv = document.getElementById('content');

// Define a function that loads the content of a page using AJAX
function loadPage(url) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      contentDiv.innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', url);
  xhr.send();
}

// Add event listeners to the navigation links that load the content of each page
homeLink.addEventListener('click', function(event) {
  event.preventDefault();
  loadPage('./home/home.html');
});

aboutLink.addEventListener('click', function(event) {
  event.preventDefault();
  loadPage('./about/about.html');
});
projectLink.addEventListener('click', function(event) {
  event.preventDefault();
  loadPage('./projects/projects.html');
});

contactLink.addEventListener('click', function(event) {
  event.preventDefault();
  loadPage('./contact/contact.html');
});