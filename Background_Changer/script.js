let white = document.getElementById("white");
let yellow = document.getElementById("yellow");
let aqua = document.getElementById("aqua");
let green = document.getElementById("green");
let black = document.getElementById("black");

let body = document.body;
white.addEventListener('click',function(){
    body.style.cssText = "background-color:whitecolor:black;";
});
yellow.addEventListener('click',function(){
    body.style.cssText = "background-color:yellow;color:black;";
});
aqua.addEventListener('click',function(){
    body.style.cssText = "background-color:aqua;color:black;";
});
green.addEventListener('click',function(){
    body.style.cssText = "background-color:green;color:white;";
});
black.addEventListener('click',function(){
    body.style.cssText = "background-color:black;color:white;";
});
// function black(){
//      body.style.cssText = "background-color:black;color:white;";
//      };
