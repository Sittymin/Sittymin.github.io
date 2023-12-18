let left = document.querySelector(".button-left");
let right = document.querySelector(".button-right");
let index = 0;
let m = document.querySelectorAll(".m");
let time;
let images = document.querySelector(".images");

function toImage (index) {
    let width = document.querySelector(".shell").clientWidth;
    images.style.transform = 'translateX(' + (index * -width) + 'px)';
}

function nextImage () {
    if (index < m.length - 1) {
        index++;
    } else {
        index = 0;
    }
    toImage(index);
}

function prevImage () {
    if (index > 0) {
        index--;
    } else {
        index = m.length - 1;
    }
    toImage(index);
}

function Timer () {
    time = setInterval(() => {
        nextImage();
        toImage(index);
    }, 3000)
}

left.addEventListener("click", () => {
    prevImage()
    clearInterval(time);
    Timer();
})
right.addEventListener("click", () => {
    nextImage()
    clearInterval(time);
    Timer();
})
Timer();