const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let index = 0;

document.getElementById('next-btn').addEventListener('click', nextImage);

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById('gallery').src = images[index];
}
