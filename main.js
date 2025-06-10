document.addEventListener('DOMContentLoaded', () => {
    // Create Logo and Add it.
    const containerEl = document.getElementById('container');
    const logoElement = document.createElement('div');
    logoElement.id = 'logo';
    containerEl.appendChild(logoElement);

    // Create it's starting position
    const pageWidth = window.innerWidth;
    console.log('Page width:', pageWidth);

    const pageHeight = window.innerHeight;
    console.log('Page height', window.innerHeight);

    const randomVert = Math.max(Math.floor(Math.random() * pageHeight) - 50, 0);
    const randomHor = Math.max(Math.floor(Math.random() * pageWidth) - 50, 0);

    logoElement.style.top = `${randomVert}px`;
    logoElement.style.left = `${randomHor}px`;

    const UpRight = () => {
        currentPositionVert += 1;
        currentPositionHor += 1;
    }

    let currentPositionVert = randomVert;
    let currentPositionHor = randomHor;

    setInterval(() => {

    }, 10)
});