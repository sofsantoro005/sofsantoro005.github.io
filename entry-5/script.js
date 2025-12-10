const images = [
    "../my-images/art/IMG_3568.JPG",
    "../my-images/fire escapes/fire3.JPG",
    "../my-images/buildings/IMG_4490.JPG",
    "../my-images/buildings/IMG_4393.JPG", 
    "../my-images/art/IMG_5112.JPG", 
    
];

// picks random image
const randomIndex = Math.floor(Math.random() * images.length);

// gets HTML image tag
const img = document.getElementById("randomImage");

// sets image source
img.src = images[randomIndex];
 