//aos
AOS.init({
    offset:300,
    duration:1000
});

//loader animation
window.addEventListener("load",()=>{
    const loader = document.querySelector(".loader");
    loader.classList.add("hidden")
})



// typed effect
const texts=["Developer","Designer","Open Source Contributer"];
const text = document.querySelector("h2 span");
var navbar = document.querySelector(".navbar");
console.log(navbar);

let count = 0;
let index =0;
let currentText = '';
let letter='';

const type = () =>{

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letter=currentText.slice(0,++index);
    text.textContent = letter;
    if(letter.length===currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type,200);
}

window.onload = type();

//Experience Tab

var slides = document.querySelector('.slider-items').children;
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var totalSlides = slides.length;
var ind = 0;

nextSlide.onclick = () =>{
    click("next");
}
prevSlide.onclick = () =>{
    click("prev");
}

const click =(direction)=>{
    if(direction == "next"){
        ind++;
        if(ind== totalSlides){
            ind =0;
        }
    }else{
        if(ind ==0){
            ind = totalSlides-1;
        }else{
            ind--;
        }
    }
    for(i=0;i<slides.length;i++){
        slides[i].classList.remove("active");
    }
    slides[ind].classList.add("active");

}

// progress bar
const progress = document.querySelectorAll(".progress-done");
console.log(progress);

progress.forEach((box)=>{
    box.style.opacity=1;
    box.style.width=box.getAttribute("data-done") +"%";
})

// const circular
const circular = document.querySelectorAll(".circle .right .progress");

circular.forEach((box)=>{
    box.style.opacity=1;
    box.style.transform = "rotate("+parseInt(box.getAttribute("data-done"))+"deg)";

})

//adding projects

let projectData =[
    {
    projectName: 'Movie App',
    projectImage: 'gifs/MovieApp.gif',
    projectUrl: 'https://satyaprakash26.github.io/Movie-App/'
    },
    {
    projectName: 'Digital-Analog Clock',
    projectImage: 'gifs/DigitalClock.gif',
    projectUrl: 'https://satyaprakash26.github.io/Analog-Digital-Watch/'
    },
    {
    projectName: 'GitHub Profile',
    projectImage: 'gifs/GithubProfile.gif',
    projectUrl: 'https://satyaprakash26.github.io/Github-Profile-App/'
    },
    {
    projectName: 'Food Recipe App',
    projectImage: 'gifs/FoodRecipe.gif',
    projectUrl: 'https://satyaprakash26.github.io/Food-Recipe-App/'
    },
    {
    projectName: 'Watch Landing Page',
    projectImage: 'gifs/WatchFeatures.gif',
    projectUrl: 'https://satyaprakash26.github.io/Watch-BuyNow-Section/'
    }
  
]

let projectContainer = document.getElementById("js-projects");
console.log(projectContainer);

window.addEventListener("load", getProjects());

function getProjects() {
  let output = "";
  projectData.forEach(
    (data, item) =>
    (output += `
    <div class="projectCard">
    <a href=${data.projectUrl} class="hoverEffect" target="_blank">
      <img
        class="projectCardImg"
        src=${data.projectImage}
        alt="Card image cap"
      />
        <h5 class="projectCardTitle">${data.projectName}</h5>
        <span class="computerLegs"></span>
        <span class="computerBase"></span>
    </a>
  </div>
  `)

  );

  projectContainer.innerHTML = output;
   console.log("projectContainer", projectContainer.innerHTML);
}