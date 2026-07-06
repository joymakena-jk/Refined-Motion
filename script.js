const cars = [

{
image:"images/hero-r8.jpeg",
title:"Audi R8",
description:"The legendary V10 supercar built for pure driving excitement.",
link:"https://www.audi.com/"
},

{
image:"images/rs7.jpeg",
title:"Audi RS7",
description:"Luxury, speed and everyday practicality combined into one masterpiece.",
link:"https://www.audi.com/"
},

{
image:"images/q5.jpeg",
title:"Audi Q5",
description:"A premium SUV built for comfort, confidence and adventure.",
link:"https://www.audi.com/"
},

{
image:"images/rs6-avant.jpeg",
title:"Audi RS6 Avant",
description:"Supercar performance meets everyday usability.",
link:"https://www.audi.com/"        
},

{
image:"images/rs-etron-gt.jpeg",
title:"Audi RS e-tron GT",
description:"The future of electric performance wrapped in breathtaking design.",
link:"https://www.audi.com/" 
},

];
let currentCar = 0;
const image = document.getElementById("carImage");
const title = document.getElementById("carTitle");
const description = document.getElementById("carDescription");
const nextImage = document.getElementById("nextCarImage");
const discoverBtn = document.getElementById("discoverBtn");



function changeCar(){

    image.style.opacity = 0;
    title.style.opacity = 0;
    description.style.opacity = 0;
    nextImage.style.opacity = 0;

    setTimeout(() => {

        currentCar++;

        if(currentCar >= cars.length){
            currentCar = 0;
        }

        let nextCar = currentCar + 1;

        if(nextCar >= cars.length){
            nextCar = 0;
        }

        image.src = cars[currentCar].image;
        title.textContent = cars[currentCar].title;
        description.textContent = cars[currentCar].description;
        nextImage.src = cars[nextCar].image;


        image.style.opacity = 1;
        title.style.opacity = 1;
        description.style.opacity = 1;
        nextImage.style.opacity = 0.55;

    },300);

}
setInterval(changeCar, 4000);
const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("closeBtn");
const heroBtn = document.getElementById("heroBtn");



discoverBtn.onclick = function(){
        window.open(cars[currentCar].link, "_blank");
    };

    heroBtn.addEventListener("click", () => {
    window.open("https://www.audi.com/", "_blank");
});
galleryImages.forEach(galleryImage => {

    galleryImage.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = galleryImage.src;

    });

});


closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (event) => {

    if(event.target === lightbox){

        lightbox.style.display = "none";

    }

});
const titles = document.querySelectorAll(".section-title");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

titles.forEach(title=>{

    observer.observe(title);

});
const intro = document.getElementById("intro");

setTimeout(function(){

    intro.style.transition="opacity 1.5s ease";

    intro.style.opacity="0";

    setTimeout(function(){

        intro.style.display="none";

    },1500);

},5000);