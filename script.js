function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('showMenu');
}

function pauseBoxes() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.animationPlayState = 'paused';
    });
}

function resumeBoxes() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.animationPlayState = 'running';
    });
}

