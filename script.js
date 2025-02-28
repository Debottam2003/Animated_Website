let images = [];
for (let i = 1; i <= 19; i++) {
    images.push(`./Wedding/image${i}.png`);
}

let date = new Date();
let hero = document.querySelector('.hero');
let slider = document.querySelector('.slider');
let footer = document.getElementsByTagName('footer');

footer[0].innerText = `@Debottam Kar ${date.toLocaleDateString()}`;
hero.style.backgroundImage = `url(${images[images.length - 1]})`;

// Add initial images
for (let i = 0; i < 4; i++) {
    let img = document.createElement('div');
    img.style.backgroundImage = `url(${images[i]})`;
    img.classList.add('slider-image');
    slider.appendChild(img);
}

let prevCounter = 0;
let nextCounter = 4;

setInterval(() => {
    if (nextCounter >= images.length) {
        nextCounter = 0;
    }
    if (prevCounter >= images.length) {
        prevCounter = 0;
    }

    // Update hero image
    hero.style.backgroundImage = `url(${images[prevCounter]})`;

    // Remove the first child (oldest image)
    let firstImage = slider.firstElementChild;
    if (firstImage) {
        slider.removeChild(firstImage);
    }

    // Add a new image to the slider
    let img = document.createElement('div');
    img.style.backgroundImage = `url(${images[nextCounter]})`;
    img.classList.add('slider-image');
    slider.appendChild(img);

    prevCounter++;
    nextCounter++;

}, 4000);

// window.addEventListener('load', ()=>{
//     // let audio = new Audio('./assets/love.mp3');
//     // audio.loop = true;
//     // audio.muted = true; // Initially muted to comply with autoplay policies
//     // audio.play().then(() => {
//     //     audio.muted = false; // Unmute after autoplay starts
//     // }).catch(err => {
//     //     console.log("Autoplay failed:", err);
//     // });
//     let audio = document.createElement('audio');
//     let body = document.querySelector('body');
//     body.appendChild(audio);
//     audio.src = './assets/love.mp3';
//     audio.loop = true;
//     audio.play();
// });
window.addEventListener('load', () => {
    let audio = document.createElement('audio');
    audio.src = './assets/love.mp3';
    audio.loop = true;
    audio.muted = true; // Start muted to comply with autoplay policies
    document.body.appendChild(audio);

    // Attempt autoplay (muted)
    audio.play().then(() => {
        console.log("Muted autoplay started.");
    }).catch(err => {
        console.log("Autoplay blocked. Waiting for user interaction.");
    });

    // Unmute and play on user interaction
    const enableAudio = () => {
        audio.muted = false;
        audio.play().then(() => {
            console.log("Audio playing with user interaction.");
        }).catch(err => {
            console.log("Audio failed to play:", err);
        });
        document.removeEventListener('click', enableAudio); // Remove listener after first click
    };

    document.addEventListener('click', enableAudio); // Play audio when the user clicks
});
