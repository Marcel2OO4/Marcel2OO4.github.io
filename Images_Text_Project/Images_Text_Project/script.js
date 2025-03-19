document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-container img");
    const textBox = document.getElementById("text-box");
    const centerBox = document.getElementById("center-box");

    function updateText() {
        let closestImg = images[0];
        let minDiff = Math.abs(images[0].getBoundingClientRect().top - window.innerHeight / 2);

        images.forEach(img => {
            let diff = Math.abs(img.getBoundingClientRect().top - window.innerHeight / 2);
            if (diff < minDiff) {
                minDiff = diff;
                closestImg = img;
            }
        });

        textBox.textContent = closestImg.getAttribute("data-text");
    }

    function hideCenterBox() {
        centerBox.style.display = "none";
        document.removeEventListener("scroll", hideCenterBox);
    }

    document.addEventListener("scroll", () => {
        updateText();
        hideCenterBox();
    });

    updateText(); // Initialize text for first view
});
// JavaScript Document