const mainBox = document.getElementById("mainBox");
const box = document.getElementById("box");

function isDesktop() {
    const ua = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const isLargeScreen = window.innerWidth >= 1024;
    return !isMobile && isLargeScreen;
}

if (isDesktop()) {
    mainBox.style.width = "45%"
} else {
    mainBox.style.width = "75%"
}
