var sentences = [
    "Kid holding dog ons shoulder",
    "Love and good times",
    "Cheekie cannon",
    "carrying loyalty on his shoulders",
    "A true friend is never a burden"
];

function changeText() {
    var randomIndex = Math.floor(Math.random() * sentences.length);
    document.getElementById('textBox').innerText = sentences[randomIndex];
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('clickableImage').addEventListener('click', changeText);
});
