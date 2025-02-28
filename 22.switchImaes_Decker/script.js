const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg"
];

let currentIndex = 0;

document.getElementById("cycleImage").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through the array
    this.src = images[currentIndex]; // Change the image source
});
// JavaScript Document