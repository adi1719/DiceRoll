//Player 1 Image
var random1 = Math.floor(Math.random() * 6) + 1;
var imgsource1 = "images/dice" + random1 + ".png";

document.querySelector(".img1").setAttribute("src", imgsource1);

//Player 2 Image
var random2 = Math.floor(Math.random() * 6) + 1;
var imgsource2 = "images/dice" + random2 + ".png";

document.querySelector(".img2").setAttribute("src", imgsource2);

//Deciding the Winner
if (random1 > random2) {
    document.querySelector("h1").innerText = "Player 1 Wins!"
}

if (random1 < random2) {
    document.querySelector("h1").innerText = "Player 2 Wins!"
}
if (random1 === random2) {
    document.querySelector("h1").innerText = "It's a Tie!"
}


