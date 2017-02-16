var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");

/* Event Listener for Button.
    Sets the body's background color to the user provided value */

colorChangeButton.addEventListener("click", function(){
    document.body.style.backgroundColor = newBGColor.value;

});


