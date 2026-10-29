window.addEventListener('DOMContentLoaded', () => {
    const hours = new Date().getHours();
    let text = "HELUIIII!!";

    if (hours < 12) {
        text = "GOODDDD MORNINGG TWINNN!!";
    } else {
        text = "GOOODDD EVENING TWINUUU!!!";
    }

    const box = document.getElementById('dynamic-greeting');
    if (box) {
        box.textContent = text;
    }
    const modeButton = document.getElementById('mode-toggle');
    if (modeButton) {
        modeButton.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
        });
    }

});
