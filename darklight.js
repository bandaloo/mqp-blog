// toggle light or dark mode, and add a cookie to remember the user's choice
let toggleMode = () => {
  let body = document.getElementById('body');
  let mode;

  // toggle class
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    document.getElementById('toggle-mode').innerHTML = 'Dark Mode';
    mode = 'light';
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    document.getElementById('toggle-mode').innerHTML = 'Light Mode';
    mode = 'dark';
  }

  // create cookie to remember choice
  // have it expire in 30 days
  let ex = new Date();
  ex.setTime(ex.getTime() + (30 * 24 * 60 * 60 * 1000));
  document.cookie = 'mode=' + mode + ';expires=' + ex.toUTCString() + ';path=/';
}


// get cookie value by name
let getCookie = (name) => {
  let cookieString = '; ' + document.cookie;
  let cookies = cookieString.split('; ' + name + '=');
  if (cookies.length == 2) return cookies.pop().split(';').shift();
}


// read cookies to set initial mode
let mode = getCookie('mode');
if (mode === 'light') {
  toggleMode();
}


document.addEventListener('keydown', function(e) {
  let key = String.fromCharCode(e.keyCode);
  if (key == 'T')
    toggleMode();
});

