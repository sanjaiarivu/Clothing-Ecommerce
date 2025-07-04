const item = JSON.parse(localStorage.getItem('checkoutItem'));

if (item) {
  document.getElementById('payment-details').innerHTML = `
    <p><strong>${item.title}</strong></p>
    <p>${item.description}</p>
    <p>Quantity: ${item.quantity}</p>
    <p>Total: ₹${item.quantity * item.price}</p>
  `;
}

document.getElementById('payment-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Show the animation overlay
  const overlay = document.getElementById('overlay');
  const video = document.getElementById('checkmarkVideo');

  overlay.style.display = 'flex';
  video.currentTime = 0;
  video.play();

  // Remove item after animation or when user clicks Continue
  localStorage.removeItem('checkoutItem');
});

// Function called by "Continue" button
function closeOverlay() {
  document.getElementById('overlay').style.display = 'none';
  window.location.href = '../HTML/home.html'; // Redirect to home
}

// Pause video after it finishes
document.getElementById('checkmarkVideo').addEventListener('ended', function () {
  this.pause();
});
