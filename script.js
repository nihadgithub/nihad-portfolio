
var i = 0

function menu(){
    var toggle=document.querySelectorAll(".nav-toggle-bar")
var nav=document.querySelector(".nav")
var nav_page=document.querySelector(".nav-page")
var nav_ul=document.querySelectorAll(".nav ul")
var nav_bar=document.querySelector(".nav-bar")
   
    if(i==0){
        /*alert("i")*/
         toggle[0].style="transform:rotate(-45deg);margin:0;position:absolute;";
        toggle[1].style="transform:rotate(45deg);margin:0;position:absolute;";
        
        nav.classList.add("nav-active")
        nav_page.classList.add("nav-page-blur")
        nav_ul[0].style="margin-left:0;opacity:1;filter:blur(0)"
        nav_bar.style="background-color:rgba(255,255,255,0.6)"
        i=1;
    }
    else{
        toggle[0].style="transform:rotate(0deg);margin:2px;position:relative;";
        toggle[1].style="transform:rotate(0deg);margin:2px;position:relative;";
        nav.classList.remove("nav-active")
        nav_page.classList.remove("nav-page-blur")
        nav_ul[0].style="margin-left:100px;opacity:0;filter:blur(5px)"
        nav_bar.style="background-color:rgba(255,255,255,1)"
        i=0;
    }
}

/*not working unless..*/
/*var navLink=document.querySelectorAll(".navlink");
navLink.forEach(n => n.addEventListener("click", closeMenu));*/
function closeMenu(){
    var toggle=document.querySelectorAll(".nav-toggle-bar")
var nav=document.querySelector(".nav")
var nav_page=document.querySelector(".nav-page")
var nav_ul=document.querySelectorAll(".nav ul")
var nav_bar=document.querySelector(".nav-bar")

    toggle[0].style="transform:rotate(0deg);margin:2px;position:relative;";
    toggle[1].style="transform:rotate(0deg);margin:2px;position:relative;";
    nav.classList.remove("nav-active")
        nav_page.classList.remove("nav-page-blur")
        nav_ul[0].style="margin-left:100px;opacity:0;filter:blur(5px)"
        nav_bar.style="background-color:rgba(255,255,255,1)" }

