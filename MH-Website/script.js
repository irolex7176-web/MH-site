// ==========================
// Splash Screen
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },2500);

});

// ==========================
// Scroll Animation
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight - 100){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealSections);

revealSections();


// ==========================
// Accordion
// ==========================

const titles=document.querySelectorAll(".title");

titles.forEach(title=>{

title.addEventListener("click",()=>{

const content=title.nextElementSibling;

if(content.style.maxHeight){

content.style.maxHeight=null;

}else{

content.style.maxHeight=content.scrollHeight+"px";

}

});

});

// ==========================
// Back To Top
// ==========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ==========================
// Navbar Effect
// ==========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="#ffffff";

header.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";

}else{

header.style.background="#ffffff";

header.style.boxShadow="0 3px 10px rgba(0,0,0,.08)";

}

});