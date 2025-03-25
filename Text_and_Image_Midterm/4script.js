document.addEventListener("DOMContentLoaded", function () {
    var textBox = document.getElementById("text-box"); // The lower third text box
    var imageWrappers = document.querySelectorAll(".image-wrapper");

    // Function to update text in the lower third box
    function updateTextBox() {
        var found = false;

        imageWrappers.forEach(function(wrapper) {
            var rect = wrapper.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                var imageText = wrapper.querySelector(".image-text").textContent;
                textBox.textContent = imageText;
                found = true;
            }
        });

        // Default text when no image is centered
        if (!found) {
            textBox.textContent = "No image in view.";
        }
    }

    // Update the text box based on the current image in view
    window.addEventListener("scroll", function () {
        // Update the text box as the user scrolls through images
        updateTextBox();
    });

    // Initial update when page loads
    updateTextBox();
});
