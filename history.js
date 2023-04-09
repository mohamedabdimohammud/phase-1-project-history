const newsBtn = document.querySelector('#newsBtn');
const squadBtn = document.querySelector('#squadBtn');
const storeBtn = document.querySelector('#storeBtn');
const homeBtn = document.querySelector('#homeBtn');
const main = document.querySelector('main');
  
// Define an object with URL properties
const data = {
homeUrl: "http://127.0.0.1:5500/home.html",
newsUrl: "http://127.0.0.1:5500/news.html",
squadUrl: "http://127.0.0.1:5500/squad.html",
storeUrl: "http://127.0.0.1:5500/store.html"
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