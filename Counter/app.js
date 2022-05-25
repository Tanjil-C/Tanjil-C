let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        
        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else{
            count = 0;
        }

        if (count < 0){
            value.style.color = "red";
            document.body.style.backgroundColor = "red";
        }
        else if (count > 0){
            value.style.color = "green";
            document.body.style.backgroundColor = "green";
        }
        else {
            value.style.color = "black";
            document.body.style.backgroundColor = "grey";
        }

        if (count < 10 && count > -1 ){
            let countString = count.toString();
            count = "0" + countString;
        }
        value.textContent = count;
    });
});