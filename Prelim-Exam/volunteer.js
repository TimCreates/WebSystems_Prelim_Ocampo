document.getElementById("volunteer-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;

  if (!name || !email || !service) {
    alert("Please fill out all fields.");
  } else {
    alert(`Thank you, ${name}! You’ve been registered as a volunteer for ${service}.`);
    document.getElementById("volunteer-form").reset(); // Reset form after submission
  }
});

document.getElementById("donation-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  const amount = document.getElementById("amount").value;
  const paymentMethod = document.getElementBy
