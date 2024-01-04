// const colors = [0,1,2,3,4,5,6,7,8,9, 
//                 "A", "B", "C", "D","E", "F"];

// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {

//   let hexColor = "#";
//   for (let i = 0; i < 6; i++){
//     hexColor += colors[getRandomNumber()]
//   }

//     document.body.style.backgroundColor = hexColor;
//     color.textContent = hexColor;
// })

// function getRandomNumber() {
//     return Math.floor(Math.random() * colors.length);
// }

/*let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
  btn.addEventListener('click', function(e){
    const style = e.currentTarget.classList;
    if (style.contains("decrease")) {
      count--;
    } else if (style.contains("increase")){
      count++
    } else {
      count = 0;
    }
    if (count > 0){
      value.style.color = "green";
    }
    if (count < 0){
      value.style.color = "red";
    }if (count == 0){
      value.style.color = "black";
    }

    value.textContent = count;
  })
})*/
 
// /* xs */
// @media (min-width: 475px) {}

// /* sm */
// @media (min-width: 640px) {}

// /* md */
// @media (min-width: 768px) {}

// /* lg */
// @media (min-width: 1024px) {}

// /* xl */
// @media (max-width: 1280px) {}

// /* 2xl */
// @media (min-width: 1536px) {}



/*document.addEventListener('DOMContentLoaded', function () {
  const modalBtn = document.querySelector('.model-btn');
  const modal = document.querySelector('.modal-container');
  const closeBtn = document.querySelector('.close-btn');

  modalBtn.addEventListener('click', function () {
    modal.classList.add("open-modal");
  });

  closeBtn.addEventListener('click', function () {
    modal.classList.remove("open-modal");
  });
});*/

/*document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll(".questions");

  questions.forEach(function (question) {
    const btn = question.querySelector(".q-btn");

    btn.addEventListener('click', function () {
      questions.forEach(function (item) {
        if (item !== question) {
          item.classList.remove("show-text");
        }
      });
      question.classList.toggle("show-text");
    });
  });
});*/

/*const btns = document.querySelectorAll(".q-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function(e) {
    const question = e.currentTarget.parentElement.parentElement;

    btns.forEach(function (item) {
      if (item !== btns.parentElement) { // Changed from 'item !== question'
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text")
  })
})*/

/*function filter(category) {
  const dishes = document.querySelectorAll('.dish');
  
  dishes.forEach(function (dish) {
      dish.style.display = 'none';
      if (dish.classList.contains(category) || category === 'all') {
          dish.style.display = 'block';
      }
  });
}*/

/*VIDEO
document.addEventListener('DOMContentLoaded', function () {

  const btn = document.querySelector(".switch-btn");
  const video = document.querySelector("video");

  btn.addEventListener('click', function(){
    if(!btn.classList.contains("slide")){
      btn.classList.add("slide");
      video.pause();
    } else{
      btn.classList.remove("slide");
      video.play();
    }
  })

})*/

// SCROLL
// NAVBAR
document.addEventListener('DOMContentLoaded', function () {
  const navBar = document.querySelector('.nav-bar');
  const navOption = document.querySelector('.nav-option');
  const navSocialMedia = document.querySelector('.nav-socialmedia');
  const icon = document.querySelector('.icon');

  icon.addEventListener('click', function () {
      // Toggle the 'hidden' class on the navigation elements
      navOption.classList.toggle('hidden');
      // navSocialMedia.classList.toggle('hidden');
  });
}); 

// HOME
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.scroll-links');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

// ABOUT

document.addEventListener('DOMContentLoaded', function() {
  const btns = document.querySelectorAll(".tab-btn");
  const about = document.querySelector(".about-us-card");
  const articles = document.querySelectorAll(".content");

  about.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    if (id) {
      btns.forEach(function(btn) {
        btn.classList.remove("active");
        btn.style.background = 'white';

        e.target.classList.add("active");
        e.target.style.background= ' rgba(238, 238, 238, 0.829)';
      });

      articles.forEach(function(article) {
        article.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
});
});

// FOOTER
// GETTING DATE

document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.querySelector('.back-to-top');
  const scrollButton = document.querySelector('.scroll-button');

  window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  });

  scrollButton.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});

//GIVEAWAY

document.addEventListener('DOMContentLoaded', function() {
 
  // Set the date we're counting down to
  const countdownDate = new Date("March 28, 2024 05:15:00").getTime();   

  // Update the countdown every 1 second
  const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 *60)) / 1000);

    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;

    if(distance < 0 ) {
      clearInterval(countdownInterval);
      document.querySelector('.deadline').innerHTML = "EXPIRED";
    }
  },1000);
});

// SLIDER

const slides = document.querySelectorAll(".slide")
const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")

slides.forEach(function(slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function() {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function() {
  counter--;
  carousel();
})

function carousel() {
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  })
}

