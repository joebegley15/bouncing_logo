document.addEventListener('DOMContentLoaded', () => {
    // Your code here runs after the HTML is fully parsed
    const gridElement = document.getElementById('grid');
    const pageWidth = window.innerWidth;
    console.log('Page width:', pageWidth);

    const pageHeight = window.innerHeight;
    console.log('Page height', window.innerHeight);

    for (let i = 0; i < pageHeight / 10 - 1; i++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        rowElement.id = `row-${i}`;
        gridElement.appendChild(rowElement);
        for (let y = 0; y < pageWidth / 10; y++) {
            const tileElement = document.createElement('div');
            tileElement.classList.add('tile');
            tileElement.id = `tile-${i}-${y}`;
            rowElement.appendChild(tileElement);
        }
    }

    const randomVert = Math.floor(Math.random() * document.innerHeight / 10);
    const randomHor = Math.floor(Math.random() * document.innerWidth / 10)

    console.log(randomVert, randomHor)

    setInterval(() => {

    }, 100);
});