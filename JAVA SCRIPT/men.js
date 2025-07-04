 const carousel = document.getElementById('carousel');
  let index = 1;

  const updateCarousel = () => {
    const images = carousel.querySelectorAll('img');
    images.forEach((img, i) => {
      img.classList.remove('active');
    });

    const offset = (index - 1) * -(32); // 30vw + 2vw margin approx
    carousel.style.transform = `translateX(${offset}vw)`;

    images[index].classList.add('active');
  };

  const moveCarousel = (direction) => {
    const images = carousel.querySelectorAll('img');
    index = (index + direction + images.length) % images.length;
    updateCarousel();
  };

  updateCarousel();


  /*-----------------cart-------------------*/

 function addToCart(title, description, price) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItemIndex = cart.findIndex(item => item.title === title);
  
  if (existingItemIndex !== -1) { 
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({
      title,
      description,
      price,
      quantity: 1
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${title} added to cart.`);
}


function filterProduct() {
  const input = document.getElementById("search-input").value.toLowerCase(); 
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => { 
    const productName = card.querySelector("h2.title").textContent.toLowerCase(); 
    const productDesc = card.querySelector("p.subtitle").textContent.toLowerCase(); 

    if (productName.includes(input) || productDesc.includes(input)) {
      card.style.display = "block"; 
    } else {
      card.style.display = "none";
    }
  });
}


let scrollBtn = document.getElementById("scrollToTopBtn");


window.onscroll = function(){
  if(document.body.scrollTop >100 || document.documentElement.scrollTop > 100){
    scrollBtn.style.display = 'block';

} else{
   scrollBtn.style.display = 'none';
}
}

scrollBtn.onclick = function(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}



function buyNow(title, description, price) {
  const item = {
    title,
    description,
    price,
    quantity: 1
  };
  localStorage.setItem('checkoutItem', JSON.stringify(item));
  window.location.href = '../HTML/payment.html';
}




