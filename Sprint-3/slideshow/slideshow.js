const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here
// get elements from HTML
const imgElement = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");
const autoBackwardBtn = document.getElementById("auto-backward-btn");
const stopBtn = document.getElementById("stop-btn");

// keep track of which image it's showing
let currentIndex = 0;
//store interval ID for auto slideshow
let intervalID = null;

// function to update image
function updateImage() {
    imgElement.src = images[currentIndex];
}

// forward button
forwardBtn.addEventListener("click", function (){
    currentIndex++;
    if (currentIndez >= images.lenght) {
        currentIndex = 0; // loop back to the start
    }
    updateImage ();
})

// backward button
backwardBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.lenght -1; // go to last image
    }
})

// auto forward
autoForwardBtn.addEventListener("click", function () {
    clearInterval(intervalId);
    intervalID = setInterval(function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }, 2000);// change at 2 sec
});

