console.log("javascript is runing")
burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
navRight = document.querySelector(".nav-right");
logo = document.querySelector(".logo");

burger.addEventListener("click", function(){
   
    navbar.classList.toggle("h-nav");
    navRight.classList.toggle("v-class");
    navList.classList.toggle("v-class");
   
    logo.classList.toggle("v-class");

})



