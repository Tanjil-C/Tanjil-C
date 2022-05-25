// DOM elements
const stockForm = document.getElementById("stockCount");
const grilledChickenBurgerInput = stockForm["grilledChickenBurger"];
const friedChickenBurgerInput = stockForm["friedChickenBurger"];
const gourmetBeefBurgerInput = stockForm["gourmetBeefBurger"];
const cheeseBurgerInput = stockForm["cheeseBurger"];
const updateBtn = document.getElementById("update-btn");


const stockRecord = JSON.parse(localStorage.getItem("stockRecord")) || [];

console.log(stockRecord);

if (stockRecord.length == 1){
    console.log("hello");
    grilledBurgerNum = document.getElementsByName('grilledChickenBurger')[0].placeholder= stockRecord[0].grilledChickenBurger;
    friedBurgerNum = document.getElementsByName('friedChickenBurger')[0].placeholder= stockRecord[0].friedChickenBurger;
    gourmetBurgerNum = document.getElementsByName('gourmetBeefBurger')[0].placeholder= stockRecord[0].gourmetBeefBurger;
    cheeseBurgerNum = document.getElementsByName('cheeseBurger')[0].placeholder= stockRecord[0].cheeseBurger;


};



const editStock = (grill, fried, beef, cheese) => {

    window.localStorage.removeItem('stockRecord');
    stockRecord.push({
        grilledChickenBurger: grill,
        friedChickenBurger: fried,
        gourmetBeefBurger: beef,
        cheeseBurger: cheese,
    });

    localStorage.setItem("stockRecord", JSON.stringify(stockRecord));
}

stockForm.onsubmit = e => {
    
    e.preventDefault();

    verify();
    
    

};


console.log(stockRecord);

function verify(){
    let check = prompt("Are you sure you would like to update. This action can not be reversed.");
    if (check == "yes"){
        editStock(
            grilledChickenBurgerInput.value,
            friedChickenBurgerInput.value,
            gourmetBeefBurgerInput.value,
            cheeseBurgerInput.value,
            
        );
    }else{

    };

}