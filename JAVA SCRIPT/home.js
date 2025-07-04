const userdata = JSON.parse(localStorage.getItem('signupData'));

const welcomeMessage = document.getElementById("welcomeMessage");
const loggedInSection = document.getElementById("loggedInSection");
const guestSection = document.getElementById("guestSection");

if (userdata && userdata.username) {
    welcomeMessage.textContent = `Welcome Back, ${userdata.username}!`;
    loggedInSection.style.display = "flex";
    guestSection.style.display = "none";
} else {
    loggedInSection.style.display = "none";
    guestSection.style.display = "flex";
}
function logout() {
    localStorage.removeItem("signupData");
    window.location.reload();
}


/* const slides = document.querySelectorAll('.category');
const next = document.querySelector('.carousel-btn left');
const prev = document.querySelector('.carousel-btn right');
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
setInterval(nextSlide, 5000); */


/*---------------------------scroll section----------------------*/


  
 function movecarousel(direction) {
    const container = document.getElementById('carousel-track');
    const scrollAmount = 300;

    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }




let shoes=document.getElementById('fem');
shoes.addEventListener('click',()=>{
    window.location.href="../HTML/female.html";
})
let kids=document.getElementById('men');
kids.addEventListener('click',()=>{
     window.location.href="../HTML/men.html";
})
let decor=document.getElementById('kids');
decor.addEventListener('click',()=>{
     window.location.href="../HTML/kids.html";
})
let beauty=document.getElementById('shoes');
beauty.addEventListener('click',()=>{
     window.location.href="../HTML/shoes.html";
})
let jewel=document.getElementById('jewel');
jewel.addEventListener('click',()=>{
     window.location.href="../HTML/jewels.html";
})
let men=document.getElementById('beauty');
men.addEventListener('click',()=>{
     window.location.href="../HTML/beauty.html";
})
let fem=document.getElementById('decor');
fem.addEventListener('click',()=>{
     window.location.href="../HTML/decor.html";
})
let  home=document.getElementById('home');  
home.addEventListener('click',()=>{
     window.location.href="../HTML/home1.html";
})


const customCarousel = document.getElementById('customCarousel');
  let customCarouselIndex = 1;

  const updateCustomCarousel = () => {
    const images = customCarousel.querySelectorAll('img');
    images.forEach(img => img.classList.remove('custom-carousel-active'));

    const offset = (customCarouselIndex - 1) * -(32); // 30vw + margin
    customCarousel.style.transform = `translateX(${offset}vw)`;

    images[customCarouselIndex].classList.add('custom-carousel-active');
  };

  const moveCustomCarousel = (direction) => {
    const images = customCarousel.querySelectorAll('img');
    customCarouselIndex = (customCarouselIndex + direction + images.length) % images.length;
    updateCustomCarousel();
  };

  updateCustomCarousel();


  