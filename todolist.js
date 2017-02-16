var usertext = document.getElementById("usertext")
var colordrop = document.getElementById("colordrop")
var NewText = document.getElementById("NewText")
var addButton = document.getElementById("addButton")
var cleartext = document.getElementById("cleartext")



addButton.addEventListener("click", function(){
    var color = colordrop.value;
    var task = "<div style= 'color: " + color + "'>" + usertext.value + "</div>";
    NewText.innerHTML = NewText.innerHTML + task;
});


NewText.addEventListener("click", function(evt){
    var addedtext = evt.target
    addedtext.parentNode.removeChild(addedtext);
});


cleartext.addEventListener("click", function(evt){
    var cleartext = evt.text;
    cleartext.parentNode.removeChild(addedtext);
    
}); 


















