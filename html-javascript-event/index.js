"use strict"
function processOnClick(){
    var div = document.getElementById("eventConclickP");
    div.innerHTML = "clicked";
}

function processOnLoad(){
    console.log(" on load event");
}

function processOnChange(scrInput){
    var text = scrInput.value;
    console.log(text);

    var obj = document.getElementById("onChangeP");
    obj.innerHTML = text; 
    console.log(obj);
}