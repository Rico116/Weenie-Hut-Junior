//
var firstnum = document.getElementById("firstnum");
var secondnum = document.getElementById("secondnum");
var dropdown = document.getElementById("dropdown");
var calculate = document.getElementById("calculate");
var answer = document.getElementById("answer");

//
calculate.addEventListener("click", function() {


    //
    var number1 = +firstnum.value;
    var number2 = +secondnum.value;
    var operation = dropdown.value;

    //
    if (operation === "add") {
        answer.innerHTML = number1 + number2
    }
    else if(operation === "sub"){
        answer.innerHTML = number1 - number2
    }

    else if(operation === "mult"){
        answer.innerHTML = number1 * number2
    }

    else if(operation === "div"){
        answer.innerHTML = number1 / number2
    }
    
    else if(operation === "squared"){
        answer.innerHTML = Math.pow(number1,number2);
    }
    
    else if(operation === "root"){
        answer.innerHTML = Math.SQRT2
    }
});
