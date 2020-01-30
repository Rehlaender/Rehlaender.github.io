// load app

function setCodeButtonListener() {  
  document.addEventListener('click', function (event) {
  if (!event.target.matches('#codeButton')) return;
    event.preventDefault();  
    toggleMenu();
  }, false);
}

function toggleMenu() {
  document.getElementById('codeMenu').classList.toggle('hidden');
}

function loadApp() {
  
  setCodeButtonListener();
}

window.onload = (event) => {
  loadApp();
};