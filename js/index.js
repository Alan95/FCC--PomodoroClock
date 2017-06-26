//Setting Globals
var m = 25;
var s = 60;
var ticking = true;
var mb = 5;
var sb = 0;
var counter = 0;
var myTimer = null;
var triggerer = 0;
var breaking = 0;
var saver = 0;
var currency = m;
//Setting Eventhandlers

var x = document.getElementById("mainclock");
var r = document.getElementById("breakerCounter");
var i = document.getElementById("lengthtimer");

var p = document.getElementById("titleMain");
var y = document.getElementById("biggerb");
var y1 = document.getElementById("smallerb");
var o = document.getElementById("smallers");
var o1 = document.getElementById("biggers");

//Firing EventHandlers
r.innerHTML = mb + ":" + sb + "0";
i.innerHTML = m;

$("#mainclock").on("click", function() {

    if (triggerer == 0 && m > 1) {
        m--;
        triggerer++;
    }
    $("#hide").fadeOut();
    if (counter % 2 !== 0) {
        stop();
        console.log("Stop");
        clearInterval(myTimer);
        counter++;
    } else {
        myTimer = setInterval(timeIt, 1000);
        counter++;
    }
});

y.addEventListener("click", function() {
    mb++;
    r.innerHTML = mb + ":" + sb + "0";
});

y1.addEventListener("click", function() {
    if (mb > 1) {
        mb--;
        r.innerHTML = mb + ":" + sb + "0";
    }
});


o.addEventListener("click", function() {
    if (m > 1) {
        m--;
        i.innerHTML = m;
        document.getElementById("clocker").innerHTML = m;
    }
});

o1.addEventListener("click", function() {
    m++;
    i.innerHTML = m;
    document.getElementById("clocker").innerHTML = m;
});


//Functions

function timeIt() {

    if (m == 1) {
        m--;
    }
    if (s == 60) {
        s--;
    }
    document.getElementById("clocker").innerHTML = m + ":" + s;

    s--;
    console.log(s);
    if (m == 0 && s == 0) {
        triggerer++;
        breaker();
    }
    if (s == 0) {
        m--;
        s = 60;
    }
}


function stop() {

    document.getElementById("clocker").innerHTML = m + ":" + s;
}

function breaker() {
    saver++;
    if (saver % 2 !== 0) {
        p.innerHTML = "Break-Time";
        m = mb;
    } else {
        p.innerHTML = "Session";
        m = currency;
        s = 60;
    }

}