
let nav = document.getElementById("nav")
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");

window.addEventListener('scroll',function(){
    // console.log(pageYOffset);
    if(pageYOffset>=15){
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    };
});
window.addEventListener('scroll', function(){
    if(pageYOffset>=30 & pageYOffset<=753){
        a1.style.cssText = 'color:white; background-color:black; font-size:25px; border-radius:4px';
    } else{
        a1.style.cssText = 'color:black; background-color: transparent;';
    };
     if(pageYOffset>=753 & pageYOffset<=1480) {
        a2.style.cssText = 'color:white; background-color:blue; font-size:25px; border-radius:4px';
    } else{
        a2.style.cssText = 'color:black; background-color: transparent;';
    };
     if(pageYOffset>=1480 & pageYOffset<=2208) {
        a3.style.cssText = 'color:white; background-color:green; font-size:25px; border-radius:4px';
    } else {
        a3.style.cssText = 'color:black; background-color: transparent;';
    } ;
    if(pageYOffset>=2208) {
        a4.style.cssText = 'color:white; background-color:brown; font-size:25px; border-radius:4px';
    } else {
        a4.style.cssText = 'color:black; background-color: transparent;';
    };
});


    