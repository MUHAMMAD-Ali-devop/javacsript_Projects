let inpt1 = document.getElementById("inpt1");
let inpt2 = document.getElementById("inpt2");
let btn1 = document.getElementById("btn1");
let flag = 1;
function validateform(){
    if(inpt1.value==""){
        document.getElementById("user").innerHTML="User_name is empty";
        flag = 0;
    } else if(inpt1.value.length < 3){
        document.getElementById("user").innerHTML="User_name required more than 3 character";
        flag = 0;
    }else {
        document.getElementById("user").innerHTML="";
        flag = 1;
    }
    if(inpt2.value==""){
        document.getElementById("pass").innerHTML="Password is empty";
        flag = 0;
    } else {
        document.getElementById("pass").innerHTML="";
        flag = 1;
    }
    if(flag){
        return true;
    } else {
        return false;
    }
}