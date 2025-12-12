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

// keep track of which image it's showing
let currentIndex = 0;

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