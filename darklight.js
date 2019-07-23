var html;

function addLight() {
  html = document.getElementById('html');
  html.classList.add('lightmode');
  toggleLight();
}

function toggleLight() {
  html.classList.toggle('lightmode');
}

document.addEventListener('DOMContentLoaded', addLight);

document.addEventListener('keydown', function(e) {
  let code = e.keyCode;
  let key = String.fromCharCode(code);
  if (key == 'T')
    toggleLight();
});

