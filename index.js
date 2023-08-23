// For Dice 1
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceSource);

// For Dice 2
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceSource2);

/*
function randomDiceGenerator(number){
var randomNumber = Math.floor(Math.random()*6) + 1;
var randomDiceImage = "dice" + randomNumber + ".png";
var randomDiceSource = "images/" + randomDiceImage;
var image = document.querySelectorAll("img")[number-1]
image.setAttribute("src", randomDiceSource) ;
}

randomDiceGenerator(1);
randomDiceGenerator(2);
*/



// To Display Result
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else if (randomNumber2 === randomNumber1){
  document.querySelector("h1").innerHTML = "Draw";
}
