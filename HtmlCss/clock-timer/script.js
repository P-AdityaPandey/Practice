
function updateLiveTime() {

    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = formattedTime;
    }
}
updateLiveTime();
setInterval(updateLiveTime, 1000);
