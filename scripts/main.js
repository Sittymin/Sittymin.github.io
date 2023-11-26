let first_button = document.querySelector("#the_first_button");
first_button.addEventListener("click", the_button);

function the_button () {
    alert("我是一个按钮!")
};


let currentImageIndex = 0;
let images = [
    './Other/BG_CS_Trinity_15.jpg',
    './Other/BG_CS_Trinity_16.jpg',
    './Other/BG_CS_Trinity_17.jpg',
    './Other/BG_CS_Trinity_18.jpg',
    './Other/BG_CS_Trinity_19_1.jpg',
    './Other/BG_CS_Trinity_19_2.jpg',
];

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#next").addEventListener("click", nextImage);
    document.querySelector("#back").addEventListener("click", backImage);
});
function nextImage() {
    let currentImage = document.querySelector("#image");
    currentImage.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
}
function backImage() {
    let currentImage = document.querySelector("#image");
    currentImage.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex - 1) === -1 ? images.length - 1 : currentImageIndex - 1;
}

setInterval(nextImage, 3000)



//图片切换
