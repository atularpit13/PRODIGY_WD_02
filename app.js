const navbar=document.querySelector(".navbar")
const hamburger=document.querySelector(".hamburger")
const navlinks=document.querySelector(".nav-links")
const navlinksLi=document.querySelectorAll(".nav-links li")
window.addEventListener('scroll',()=>{
    if(this.scrollY >=100){
        navbar.classList.add("scrolled")
    }else{
        navbar.classList.remove("scrolled")

    }
})
hamburger.addEventListener('click',()=>{
    navlinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})
navlinksLi.forEach(li=>li.addEventListener('click',()=>{
    navlinksLi.forEach(li=>li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove('active')
}))

var options={
    strings:[
        'Travele Agency',
        'Book Your Tickets'
    ],
    typeSpeed:40,
    loop: true,
    loopCount: Infinity,
    backDelay:2000
};


var typed = new Typed("#hero-titles", options);
 
AOS.init();