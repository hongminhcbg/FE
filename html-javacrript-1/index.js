function changeRootData(){
    document.getElementById("root").innerHTML = "<h1>hello world</h1>";
    document.getElementById("text").style.color = "red";
}

function startAnimation() {
    var icon = document.getElementById("animate");
    var pos = 0;
    if (icon.style.top !== "" && icon.style.top !== "0px") {
        return
    }

    var id = setInterval(startInter, 10);
    console.log("end setInterval");

    function startInter(){
        console.log("here in start func");
        if(pos == 300) {
            icon.style.top = 0 + "px";
            icon.style.left = 0 + "px";
            clearInterval(id);
        } else {
            pos++;
            icon.style.top = pos + "px";
            icon.style.left = pos + "px";
        }
    }
}
