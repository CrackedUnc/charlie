document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('charlieButton');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        message.textContent = "Charlie is the perfect husband-Charlie's husband";
        setRainbowBackground();
    });

    function setRainbowBackground() {
        let hue = 0;
        setInterval(() => {
            document.body.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
            hue = (hue + 1) % 360;
        }, 10);
    }
});