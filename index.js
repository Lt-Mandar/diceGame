function reloadPage() {
  reloadPage = location.reload();
}

var d1 = Math.floor(Math.random()*6 + 1); //dice 1 roll
var d2 = Math.floor(Math.random()*6 + 1); // dice 2 roll

// selecting dice 1 and dice 2 images based on rolls

var d1ImgString = "images/dice" + d1 + ".png";
var d2ImgString = "images/dice" + d2 + ".png";

//displaying the selected dice 1 and dice 2 images.

document.querySelector(".img1").setAttribute("src", d1ImgString);
document.querySelector(".img2").setAttribute("src", d2ImgString);

//declaring the winner

if (d1 > d2) {
  document.querySelector(".container h1").innerHTML = " 🚩Player 1 Wins!"
} else if (d2 > d1) {
  document.querySelector(".container h1").innerHTML = "Player 2 Wins! 🚩"
} else {
  document.querySelector(".container h1").innerHTML = "Draw!"
}

btnRefresh = document.querySelector("#refresh");
btnRefresh.addEventListener("click", reloadPage);
