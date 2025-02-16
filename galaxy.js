const iconContainer = document.querySelector("#icons");

const icons = ['\u25CB', '\u2716'];

let iconCount = 0;
const maxIcon = 20;

function createIcon(){

    if(iconCount >= maxIcon ){
        clearInterval(iconInterval);
        return;
    }

    const icon = document.createElement("div");
    icon.classList.add('icon');

    icon.textContent = icons[Math.floor(Math.random()* icons.length)];

    icon.style.left = `${Math.random() * 100}vw`;
    icon.style.animationDuration = `${Math.random() * 2 + 4}s`;

    iconContainer.appendChild(icon);

    iconCount++;
}

let iconInterval = function generateIcons() {
    iconInterval = setInterval(createIcon, 100);
}

window.onload = iconInterval;