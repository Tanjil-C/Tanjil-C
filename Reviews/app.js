
const reviews = [

    {
        id: 1,
        name: "Abdul Hassan",
        job: "Software Developer",
        img: "/Reviews/Media/person.png",
        text: "The role of a software developer engages in identifying, designing, installing and testing a software system they have built for a company from the ground up. It can range from creating internal programmes that can help businesses be more efficient to producing systems that can be sold on the open market.",

    },

    {
        id: 2,
        name: "Alfred Ramos",
        job: "Data Analyst",
        img: "/Reviews/Media/persontwo.png",
        text: "A data analyst collects and stores data on sales numbers, market research, logistics, linguistics, or other behaviors. They bring technical expertise to ensure the quality and accuracy of that data, then process, design, and present it in ways to help people, businesses, and organizations make better decisions.",

    },

    {
        id: 3,
        name: "Susan Clarks",
        job: "HR CONSULTANT",
        img: "/Reviews/Media/personthree.png",
        text: "Human resources (HR) consultants provide human capital guidance and advice to a variety of companies. They may develop human resource models, advise businesses on policies and procedures, and resolve any issues that a company might have with its workforce. They also assist with recruiting and training new employees.",

    },

];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
});

// show person based on item

function showPerson(person){
    const item = reviews[person];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    img.src = item.img;

}

// show next person

nextBtn.addEventListener("click", function(){
    console.log("next");
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function(){
    console.log("prev");
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1 ;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener("click", function(){
    console.log("Random");
    currentItem = randomNumber();
    showPerson(currentItem);
});

function randomNumber(){
    let rand = Math.floor(Math.random() * 3);

    do{
        rand = Math.floor(Math.random() * 3);
    }while(rand == currentItem)

    return (rand);
}











