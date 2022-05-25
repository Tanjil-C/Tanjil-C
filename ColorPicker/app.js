const colours = ["green", "red", "blue", "purple", "yellow", "pink"];
const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

btn.addEventListener("click", function (){
    const randomNumber = getRandomNumber();
    console.log(randomNumber)

    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colours.length);
}