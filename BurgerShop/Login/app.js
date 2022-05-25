const form = document.getElementById("login-form");
const usernameInput = form["username"];
const passwordInput = form["password"];
const messageContainer = document.querySelector(".message");
messageContainer.style.display = "none";
let n = 0;

const users = [
    {
        username: "tanjil@burgerz.co.uk",
        password: "test",
    },
    {
        username: "ayesha@burgerz.co.uk",
        password: "test2",
    }

];

incorrectLogin();

console.log(users.length);

const validate = (username, password) => {

    users.forEach((element) => {
        

        n++;

        if (n>0){
            messageContainer.style.display = "flex";
        }

        const staffUsername = element.username;
        const staffPasword = element.password;
        const userInput = username.value;
        const passInput = password.value;

        if(userInput == staffUsername && passInput == staffPasword){
            window.location.href = '/BurgerShop/Stock/index.html';
            console.log("correct");
            messageContainer.style.display = "none";
        }else(
            console.log(n)
        )
    });
}


form.onsubmit = e => {
    e.preventDefault();
    validate(usernameInput, passwordInput);    
    
}

function incorrectLogin(){
    const message = document.createElement("p");
    message.innerText = "The username or password you have entered is invalid"

    //add to message div
    messageContainer.appendChild(message);


 //   setTimeout(() => {
   //     location.reload();
    //}, 2000);

}

