window.addEventListener("scroll",()=>{
    let smooth = document.getElementById('smooth');

    smooth ={
        behaviour: "smooth",
        top: 0,
    }
});

function nav(){
    const navbar = document.querySelectorAll('.navbar');

    navbar.forEach(n =>{
        if(n.getBoundingClientRect.top < window.innerHeight - 100){
            n.classList.toggle("active");
        }

    });
}

window.addEventListener("scroll", nav);

let slideIndex = 0;
const slides = document.getElementById('slides')

function showSlide(n){
    
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach(s => s.classList.remove('active'));

    slides[slideIndex].classList.add('active');
}


function currentSlide(n){
    showSlide(slideIndex = n);
}

// animate the page will be active and then contents leften side will be shown and animation
function ls(){
    const icons = document.querySelectorAll('.animation');

    icons.forEach(el => {
        /* "getBoundingClientRect()" inside the function ("width", "height", "top", "bottom", "left", "right"){
           1.width - the page content will complete 100% i mean(full width ("X"))  The page will be animated
           2.height - the page content will complete 100% i mean(full height ("Y"))  The page will be animated
           3.top - the page content will complete 100% i mean(full height ("Y")) the animated will shown the top 
           4.bottom - the page content will complete 100% i mean(full height ("Y")) the animated will shown the bottom
           5.left - the page content will complete 100% i mean(full width ("X"))  The page will be animated by leften side
           6.right - the page content will complete 100% i mean(full width ("X"))  The page will be animated by righten side
          }
           
        */ 
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("active");
        }
        else{
            el.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", ls);

// animate the page will be active and then contents righten side will be shown and animation
function rs(){
    const right = document.querySelectorAll('.animation-right');

    right.forEach(er => {
        if(er.getBoundingClientRect().top < window.innerHeight - 100){
            er.classList.add("active");
        }
        else{
            er.classList.remove("active");
        }
    });
}
window.addEventListener("scroll", rs);


function ts(){
    const top = document.querySelectorAll('.title');

    top.forEach(et => {
        if(et.getBoundingClientRect().top < window.innerHeight - 100){
            et.classList.add("active");
        }
        else{
            et.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", ts);