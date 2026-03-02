const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el)=>observer.observe(el));

const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const totalSlides = document.querySelectorAll(".slide").length;

let index = 0;

function updateSlider(){

slides.style.transform =
`translateX(-${index * 100}%)`;

dots.forEach(dot => dot.classList.remove("active"));
dots[index].classList.add("active");
}

function nextSlide(){
index++;

if(index >= totalSlides){
index = 0;
}

updateSlider();
}

//setInterval(nextSlide, 5000);

/* click navigation */
dots.forEach((dot,i)=>{
dot.addEventListener("click",()=>{
index=i;
updateSlider();
});
});



document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".tab");
    const cards = document.querySelectorAll(".portfolio-card");

    function filterCards(category){

        cards.forEach(card => {

            if(category === "all" || card.classList.contains(category)){
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });
    }

    /* default load */
    filterCards("all");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const filter = tab.getAttribute("data-filter");
            filterCards(filter);

        });

    });

});

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a")
.forEach(link=>{
    link.addEventListener("click",()=>{
        navLinks.classList.remove("active");
    });
});