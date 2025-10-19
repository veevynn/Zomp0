const mainBox = document.getElementById("mainBox");
const box = document.getElementById("box");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
let savedStartPage = localStorage.getItem("savedStartPage");
let health = localStorage.getItem('health');
let ration = localStorage.getItem('ration');

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

if (savedStartPage === null) {
    localStorage.setItem("savedStartPage", "0");
}

let startPage = "./scenes/" + savedStartPage + "/" + savedStartPage + ".html"

console.log(startPage)

startButton.addEventListener("click", () => {
    window.location.href = startPage;
});

resetButton.addEventListener("click", () => {
    localStorage.setItem("savedStartPage", "0");
    localStorage.setItem("health", "100");
    localStorage.setItem("ration", "0");
    window.location.href = "./index.html";
});