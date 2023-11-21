window.addEventListener('scroll',function(){
    if(pageYOffset>=120){
        let nav = document.getElementById("nav");
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
});