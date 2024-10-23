
let headers = document.getElementsByClassName('head');
let item = document.querySelector('h2');

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener('click', change);
}

function change() {
  item.style.color = 'blue';
}
