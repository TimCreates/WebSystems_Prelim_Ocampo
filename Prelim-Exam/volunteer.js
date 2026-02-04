// Volunteer form validation
document.getElementById("volunteer-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;

  // Check if all fields are filled out
  if (!name || !email || !service) {
    alert("Please fill out all fields.");
  } else {
    // If valid, show success message and reset form
    alert(`Thank you, ${name}! You’ve been registered as a volunteer for ${service}.`);
    document.getElementById("volunteer-form").reset(); // Reset form after submission
  }
});

// Donation form validation
document.getElementById("donation-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  const amount = document.getElementById("amount").value;
  const paymentMethod = document.getElementById("payment-method").value;

  // Validate donation amount
  if (!amount || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid donation amount.");
  } else if (!paymentMethod) {
    alert("Please select a payment method.");
  } else {
    // If valid, show success message and reset form
    alert(`Thank you for your donation of ₱${amount} via ${paymentMethod}.`);
    document.getElementById("donation-form").reset(); // Reset form after submission
  }
});
