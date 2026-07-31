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
"images/IMG-20250531-WA0044.jpg",
"images/IMG-20250618-WA0020.jpg",
"images/IMG-20250702-WA0034.jpg",
"images/IMG-20250702-WA0036.jpg",
"images/IMG-20250712-WA0057.jpg",
"images/IMG-20251025-WA0030.jpg",
"images/IMG-20251207-WA0003.jpg",
"images/IMG-20251207-WA0009.jpg",
"images/IMG-20260215-WA0046.jpg",
"images/IMG-20260215-WA0047.jpg",
"images/IMG-20260419-WA0004.jpg",
"images/IMG-20260427-WA0045.jpg",
"images/IMG20251201163853_01.jpg",
"images/IMG20251201163853_03.jpg",
"images/Snapchat-775781863.jpg",
"images/Snapchat-1814954628.jpg",
"images/Snapchat-2139462222.jpg"
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
