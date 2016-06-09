function process() {
    var msg = "";
    if($("#sendButton")) {
        console.log("sending msg:" + msg);
        $("#messageInput").val(msg);
        $("#sendButton").click();
        $("#connectButton").click();
    }
    else {
        console.log("click");
        $("#connectButton").click();
    }
}

//setInterval(process, 2000);

alert("load well!");