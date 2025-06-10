document.addEventListener('DOMContentLoaded', () => {
    // Create Logo and Add it.
    const containerEl = document.getElementById('container');
    const logoElement = document.createElement('div');
    logoElement.id = 'logo';
    containerEl.appendChild(logoElement);
    const size = 200;
    logoElement.style.height = `${size}px`;
    logoElement.style.width = `${size}px`;

    // Create it's starting position
    let pageWidth = window.innerWidth;
    console.log('Page width:', pageWidth);

    let pageHeight = window.innerHeight;
    console.log('Page height', window.innerHeight);

    const randomVert = Math.max(Math.floor(Math.random() * pageHeight) - size, 0);
    const randomHor = Math.max(Math.floor(Math.random() * pageWidth) - size, 0);

    logoElement.style.top = `${randomVert}px`;
    logoElement.style.left = `${randomHor}px`;


    let currentPositionVert = randomVert;
    let currentPositionHor = randomHor;

    // Positions meaning
    // const positions = {
    //     0: "upRight",
    //     1: "upLeft",
    //     2: "downRight",
    //     3: "downLeft"
    // }

    let direction = Math.floor(Math.random() * 4);

    const resetOnResize = () => {
        console.log("HIT")
        const logo = document.getElementById('logo');

        // Get current position as percentages of old screen size
        const percentTop = parseFloat(logo.style.top) / pageHeight;
        const percentLeft = parseFloat(logo.style.left) / pageWidth;

        // Update window dimensions
        pageWidth = window.innerWidth;
        pageHeight = window.innerHeight;

        // Recalculate pixel positions based on new screen size
        const newTop = percentTop * pageHeight;
        const newLeft = percentLeft * pageWidth;

        logo.style.top = `${newTop}px`;
        logo.style.left = `${newLeft}px`;

        // Optionally reset other properties or behavior here
    };

    window.addEventListener('resize', resetOnResize);

    const changeImage = () => {
        const imageUrl = `images/${Math.ceil(Math.random() * 30)}.jpg`;
        document.getElementById("logo").style.background = `url('${imageUrl}')`
    }


    const adjustDirection = () => {
        // corner cases
        if (currentPositionHor === 0 && currentPositionVert === 0) {
            direction = 2;
            return changeImage();
        }
        if (currentPositionHor === pageHeight - size && currentPositionVert === pageWidth - size) {
            direction = 1;
            return changeImage();
        }
        if (currentPositionHor === pageHeight - size && currentPositionVert === 0) {
            direction = 0;
            return changeImage();
        }
        if (currentPositionHor === 0 && currentPositionVert === pageWidth - size) {
            direction = 3;
            return changeImage();
        }
        if (currentPositionHor <= 0) {
            if (direction === 1) {
                direction = 0;
                return changeImage();
            }
            if (direction === 3) {
                direction = 2;
                return changeImage();
            }
        }

        if (currentPositionHor >= pageWidth - size) {
            if (direction === 0) {
                direction = 1;
                return changeImage();
            }
            if (direction === 2) {
                direction = 3;
                return changeImage();
            }
        }

        if (currentPositionVert >= pageHeight - size) {
            if (direction === 2) {
                direction = 0;
                return changeImage();
            }
            if (direction === 3) {
                direction = 1;
                return changeImage();
            }
        }

        if (currentPositionVert <= 0) {
            if (direction === 0) {
                direction = 2;
                return changeImage();
            }
            if (direction === 1) {
                direction = 3;
                return changeImage();
            }
        }
    }

    const move = () => {
        switch (direction) {
            case 0:
                currentPositionHor++;
                currentPositionVert--;
                break;
            case 1:
                currentPositionHor--;
                currentPositionVert--;
                break;
            case 2:
                currentPositionHor++;
                currentPositionVert++;
                break;
            case 3:
                currentPositionHor--;
                currentPositionVert++;
                break;
        }
        logoElement.style.top = `${currentPositionVert}px`;
        logoElement.style.left = `${currentPositionHor}px`;
    }

    changeImage();

    setInterval(() => {
        adjustDirection();
        move();
    }, 10)
});