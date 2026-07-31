const images = [
"images/1774241685747.png",
"images/FB_IMG_1777340100000.jpg",
"images/IMG_20240322_142554.jpg",
"images/IMG_20241022_172319_829.webp",
"images/IMG-20240913-WA0100.jpg",
"images/IMG-20241202-WA0060.jpg",
"images/IMG-20241202-WA0062.jpg",
"images/IMG-20250125-WA0028.jpg",
"images/IMG-20250531-WA0023.jpg",
"images/IMG-20250531-WA0040.jpg",

];

let current = 0;

const slider = document.getElementById("slider");

function showImage(index){
    slider.src = images[index];
}

function nextImage(){
    current = (current + 1) % images.length;
    showImage(current);
}

function previousImage(){
    current = (current - 1 + images.length) % images.length;
    showImage(current);
}

// Auto slide every 3 seconds
setInterval(nextImage,3000);
