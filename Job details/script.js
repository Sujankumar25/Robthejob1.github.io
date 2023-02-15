window.addEventListener('scroll',()=> {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 20)
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:0,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          481:{
              items:3
          },
          1000:{
              items:3
          }
      }
    });
  });


const menu = document.querySelector(".nav-menu");
 const menuBtn=document.querySelector("#open-menu-btn");
 const closeBtn= document.querySelector("#close-menu-btn");


 menuBtn.addEventListener('click',()=>{
    menu.style.display='flex';
    closeBtn.style.display='inline-block';
    menuBtn.style.display = 'none'
 })


 const closeNav = () => {

    menu.style.display='none';
    closeBtn.style.display='none';
    menuBtn.style.display = 'inline-block'

 }

 closeBtn.addEventListener('click',closeNav)


