const newsBtn = document.querySelector('#newsBtn');
const squadBtn = document.querySelector('#squadBtn');
const storeBtn = document.querySelector('#storeBtn');
const homeBtn = document.querySelector('#homeBtn');
const main = document.querySelector('main');
  
// Define an object with URL properties
const data = {
homeUrl: "https://mohamedabdimohammud.github.io/phase-1-project/",
newsUrl: "https://mohamedabdimohammud.github.io/phase-1-project-news/",
squadUrl: "https://mohamedabdimohammud.github.io/phase-1-project-squad/",
storeUrl: "https://mohamedabdimohammud.github.io/phase-1-project-store/"
};
  
// Add event listeners to buttons, using the URL properties from the data object
homeBtn.addEventListener('click', function() {
window.location.href = data.homeUrl;
});
  
newsBtn.addEventListener('click', function() {
window.location.href = data.newsUrl;
});
  
squadBtn.addEventListener('click', function() {
window.location.href = data.squadUrl;
});
  
storeBtn.addEventListener('click', function() {
window.location.href = data.storeUrl;
});