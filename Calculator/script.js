let inpt = document.getElementById("inpt");
let sin = document.getElementById("sin");
let cos = document.getElementById("cos");
let tan = document.getElementById("tan");
sin.addEventListener('click', function(){
    const svalue = Math.sin(inpt.value*(Math.PI/180));
    inpt.value = svalue;
})
cos.addEventListener('click', function(){
    const svalue = Math.cos(inpt.value*(Math.PI/180));
    inpt.value = svalue;
})
tan.addEventListener('click', function(){
    const svalue = Math.tan(inpt.value*(Math.PI)/180);
    inpt.value = svalue;
})