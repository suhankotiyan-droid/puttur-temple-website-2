// ===========================
// HERO IMAGE SLIDER
// ===========================

const hero = document.querySelector(".hero");

const images = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg",
    "images/hero4.jpg",
    "images/hero5.jpg"
];

let current = 0;

function changeHero(){

    current++;

    if(current >= images.length){
        current = 0;
    }

    hero.style.background =
    `linear-gradient(rgba(0,0,0,.60),rgba(0,0,0,.60)),
    url('${images[current]}')`;

    hero.style.backgroundSize="cover";
    hero.style.backgroundPosition="center";

}

setInterval(changeHero,4000);

// ===========================
// SCROLL ANIMATION
// ===========================

const hiddenElements=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ===========================
// ACTIVE NAV LINK
// ===========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let currentSection="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(scrollY>=sectionTop){

currentSection=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+currentSection){

link.classList.add("active");

}

});

});