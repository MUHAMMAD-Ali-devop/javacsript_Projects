let next = document.getElementById("next");
let prev = document.getElementById("prev");
let num1 = 0 ;

//  show -- function 

function slideshow(num){
    let slides = document.getElementsByClassName("slides");   
    if(num == slides.length){
        num1=0;
        num=0;
    }
    if(num<0){
        num1 = slides.length-1;
        num = slides.length-1;
    }
    for (y of slides){
        y.style.display = "none";
    }
    slides[num].style.display = "block"; 
    
}

    //    slides show next button


    next.addEventListener('click' , function(){
        num1 += 1;
        slideshow(num1);
        })


    //    slide show previous button 


    prev.addEventListener('click' , function(){
            num1 -= 1;
            slideshow(num1);
            })
            
    //   calling slide show function
        slideshow(num1);
