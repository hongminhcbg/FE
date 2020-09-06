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

function processMouseOver(){
    var element = document.getElementById("onMouseOverP");
    element.innerHTML = "Mouse onto me";
}

function processMouseOut(){
    var element = document.getElementById("onMouseOverP");
    element.innerHTML = "Mouse not onto me";

}

function processMouseDown(){
    var element = document.getElementById("onMouseOverP");
    element.innerHTML = "Mouse down";

}

function processMouseUp(){
    var element = document.getElementById("onMouseOverP");
    element.innerHTML = "Mouse Up";

}
