
var randomNumber1;
randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2;
randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6) + 1;
randomNumber2 = Math.floor(randomNumber2);

var randomImage1 = "images/dice" + randomNumber1 + ".png";

var randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src" , randomImage1);

document.querySelector(".img2").setAttribute("src" , randomImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = " 🚩 Player 1 wins ";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = " Player 2 wins 🚩";
}
else{
    document.querySelector("h1").textContent = "Draw";
}
