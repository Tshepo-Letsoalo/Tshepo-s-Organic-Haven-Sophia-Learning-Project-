// 1. Footer Subscribe
function handleSubscribe() {
  const emailInput = document.getElementById('subscriber-email');
  if (emailInput && emailInput.value !== "") {
      alert("Subscription Successful! Welcome to Tshepo’s Organic Haven.");
      emailInput.value = "";
  } else {
      alert("Validation Error: Please enter a valid email.");
  }
}

// 2. Shopping Cart (sessionStorage)
function addToCart(name, price) {
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  cart.push({ name: name, price: price });
  sessionStorage.setItem('cart', JSON.stringify(cart));
  alert(name + " added to your shopping cart!");
}

function viewCart() {
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  if (cart.length === 0) return alert("Your cart is empty.");
  let list = cart.map(i => i.name + " - $" + i.price).join("\n");
  alert("Current Items:\n" + list);
}

function clearCart() {
  sessionStorage.removeItem('cart');
  alert("Cart cleared.");
}

// 3. Contact Form (localStorage)
function handleContactSubmit(event) {
  event.preventDefault();
  const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      msg: document.getElementById('message').value
  };
  localStorage.setItem('customOrder', JSON.stringify(data));
  alert("Success: Your order request has been saved to LocalStorage.");
}