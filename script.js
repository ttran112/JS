//declare some constant
let button = document.getElementById("button");
let number = document.getElementById("number");
let result = document.getElementById("results");

button.onclick = heehaw;

function heehaw() {
    let enterNumber = number.value;

    if (enterNumber < 0 || isNaN(enterNumber))
    {
        result.innerHTML = "Please enter a positive number";
    }
    else
    {
        result.textContent = "";
    }

    //creat a loop for each element from i to enterNumber
    for (let i = 1; i <= enterNumber; i++)
    {
        // number divide 3 and 5 with no remainder
        if ( i % 3 == 0 && i % 5 == 0 )
        {
            result.innerHTML += "Hee Haw! <br>";
        }
        // number divide by 5 with no remainder
        else if ( i % 5 == 0)
        {
            result.innerHTML += "Haw! <br>";
        }
        // number divide by 3 with no remainder
        else if ( i % 3 == 0 )
        {
            result.innerHTML += "Hee! <br>";
        }
        //everything else
        else
            result.innerHTML += i + "<br>";

    }
}