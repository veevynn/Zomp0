let health = localStorage.getItem('health');
let ration = localStorage.getItem('ration');
const resetButton = document.getElementById("resetButton");
const mainBox = document.getElementById("mainBox");
const option1 = document.getElementById("sB-0.1")
const option2 = document.getElementById("sB-0.2")
const option3 = document.getElementById("sB-0.3")

localStorage.setItem("savedStartPage", "0");

if (!health) {
    health = 100;
} else {
    health = parseInt(health);
}

if (!ration) {
    ration = 0;
} else {
    ration = parseInt(ration);
}

document.getElementById('healthDisplay').textContent = `${health}/100`;
document.getElementById('rationDisplay').textContent = `${ration}`;

resetButton.addEventListener("click", () => {
    localStorage.setItem("savedStartPage", "0");
    localStorage.setItem("health", "100");
    localStorage.setItem("ration", "0");
    window.location.href = "../../index.html";
});

function isDesktop() {
    const ua = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const isLargeScreen = window.innerWidth >= 1024;
    return !isMobile && isLargeScreen;
}

if (isDesktop()) {
    mainBox.style.width = "30%"
} else {
    mainBox.style.width = "50%"
}

option1.addEventListener("click", () => {
    localStorage.setItem("health", health - 25);
    window.location.href = "../1/1.html"
});