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


    let currentPositionVert = randomVert;
    let currentPositionHor = randomHor;

    const positions = {
        0: "upRight",
        1: "upLeft",
        2: "downRight",
        3: "downLeft"
    }

    let direction = Math.floor(Math.random() * 4);

    console.log(direction, positions[direction])


    const adjustDirection = () => {
        // corner cases
        if (currentPositionHor === 0 && currentPositionVert === 0) {
            direction = 2;
            return;
        }
        if (currentPositionHor === pageHeight - 50 && currentPositionVert === pageWidth - 50) {
            direction = 1;
            return;
        }
        if (currentPositionHor === pageHeight - 50 && currentPositionVert === 0) {
            direction = 0;
            return;
        }
        if (currentPositionHor === 0 && currentPositionVert === pageWidth - 50) {
            direction = 3;
            return;
        }
        if (currentPositionHor === 0) {
            if (direction === 1) {
                direction = 0;
            }
            if (direction === 3) {
                direction = 2;
            }
        }

        if (currentPositionHor === pageWidth - 50) {
            if (direction === 0) {
                direction = 1;
            }
            if (direction === 2) {
                direction = 3;
            }
        }
    }

    const move = () => {
        switch (direction) {
            case 0:
                currentPositionHor++;
                currentPositionVert++;
                break;
            case 1:
                currentPositionHor--;
                currentPositionVert++;
                break;
            case 2:
                currentPositionHor++;
                currentPositionVert--;
                break;
            case 3:
                currentPositionHor--;
                currentPositionVert--;
                break;
        }
        logoElement.style.top = `${currentPositionVert}px`;
        logoElement.style.left = `${currentPositionHor}px`;
    }

    setInterval(() => {
        adjustDirection();
        move();
    }, 10)
});