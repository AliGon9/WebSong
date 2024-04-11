var backgrounds = document.querySelectorAll('.background');

let backgroundIndex = 0;

function updateBackgrounds() {
    backgrounds.forEach((background) => {
        background.style.opacity = 0;
    });

    backgrounds[backgroundIndex].style.opacity = 1; 

    backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
}

updateBackgrounds();

setInterval(updateBackgrounds, 3000);


