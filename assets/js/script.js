$(document).ready(function(){
    $('.carousel01').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    $('.carousel02').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    $('.carousel03').owlCarousel({
        loop:true,
        margin:10,
        center:true,
        onDragged:triggerNext,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    function triggerNext(event){
        if(event.target.classList.contains('carousel03')){
            $('.carousel04').trigger('next.owl.carousel');
        }else if(event.target.classList.contains('carousel04')){
            $('.carousel03').trigger('next.owl.carousel');
        }
    }

    $('.carousel04').owlCarousel({
        loop:true,
        margin:10,
         items:1,
         onDragged:triggerNext
    })
  });
  

//counter
let countdownDate=new Date('Mar 10 2024 14:00:00');
let countdown=setInterval(function(){
    let now=new Date().getTime();
    let distance=countdownDate - now;
    let days=Math.floor(distance/(1000 * 60 * 60 * 24));
    let hours=Math.floor((distance%(1000 * 60 * 60 * 24))/(1000 * 60*60));
    let minutes=Math.floor((distance%(1000 * 60 * 60))/(1000 * 60));
    let seconds=Math.floor((distance%(1000 * 60 ))/1000);
    
    document.getElementById('days').innerHTML=days;
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('minutes').innerHTML=minutes;
    document.getElementById('seconds').innerHTML=seconds;
 if(distance <0){
    clearInterval(countdown);
    document.getElementById('timer').innerHTML='Expired';
 }

},1000)
let nav =document.querySelector('nav');
$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>100)
   $('nav ul li a').toggleClass('scrolled-link',$(this).scrollTop()>100)
})
let lastScroll=0
window.addEventListener('scroll',()=>{
    let currentScroll=window.pageYOffset;
    if(currentScroll==0){
        document.getElementById('logo').removeAttribute('src');
        document.getElementById('logo').setAttribute('src','assets/img/logo-edu-white.png');
    }
    if(currentScroll > lastScroll && !nav.classList.contains('scroll-down')){
        nav.classList.remove('scroll-up');
        nav.classList.add('scroll-down');
    }
    if(currentScroll < lastScroll && nav.classList.contains('scroll-down')){
        nav.classList.add('scroll-up');
        nav.classList.remove('scroll-down');
        document.getElementById('logo').setAttribute('src','assets/img/logo-edu_black.png');

    }
    lastScroll=currentScroll;
})

let register=document.getElementById('registerPage');
let login=document.getElementById('loginPage');
let overlay=document.getElementById('overlay');
let overlay2=document.getElementById('overlay2');
let registerPage=document.getElementById('register-page');
let loginPage=document.getElementById('login-page');
register.addEventListener('click',function(){
    registerPage.style.display='block';
    document.body.style.overflowY = "hidden";
})
login.addEventListener('click',function(){
    loginPage.style.display='block';
    document.body.style.overflowY = "hidden";

})
overlay.addEventListener('click',function(){
    registerPage.style.display='none';
    document.body.style.overflowY = "visible";
})
overlay2.addEventListener('click',function(){
    loginPage.style.display='none';
    document.body.style.overflowY = "visible";
})
$(document).ready(function(){
    $('#loading').fadeOut(3000);
})
var popular=document.getElementById('popular-courses');
var scrollToTop=document.querySelector('.scrollToTop');
window.addEventListener('scroll',function(){
if(window.scrollY>popular.offsetTop){
    scrollToTop.style.opacity='1';

}
if(window.scrollY<=popular.offsetTop){
    scrollToTop.style.opacity='0';

}

})
scrollToTop.addEventListener('click',function(){
window.scroll({
top:0,
behavior:"smooth"

    })
})