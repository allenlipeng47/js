function test(){
    alert("hello");
}

test();
//setTimeout(test, 10000);

document.getElementById("btn").onclick=test;

//set input text value
//$("#a").val("a");

//simulate click() function
//$("#btn").click();


//setInterval(test, 10000);

//load js in chrome
var script = document.createElement('script');
script.type = 'text/javascript';
script.src="http://www.allenlipeng47.com/js/ml.js";
document.head.appendChild(script);
//script.src="file:\\\\\\c:\\Users\\lipeng\\_Main\\js\\js\\ml.js"

//var jq = document.createElement('script');
//jq.type = 'text/javascript';
//jq.src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
//document.head.appendChild(jq);