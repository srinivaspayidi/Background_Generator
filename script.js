var images = ["image1.webp", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg"];

function changeBackground() {
  var image = images[Math.floor(Math.random() * images.length)];
  imageContainer.style.backgroundImage = "url('" + image + "')";
}

var imageContainer = document.getElementById("imageContainer");
var changeButton = document.getElementById("changeBtn");
changeButton.addEventListener("click", changeBackground);
