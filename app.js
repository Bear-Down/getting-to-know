const header = document.querySelector('.header div');
const greeting = document.createElement('p');
header.appendChild(greeting);

function updateTime() {
  const date = new Date();
  greeting.textContent = `${date.toLocaleDateString()} | ${date.toLocaleTimeString()}`;
}

setInterval(updateTime, 1000);