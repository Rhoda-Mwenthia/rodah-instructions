// Handle contact form submission (simple frontend simulation)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const response = document.getElementById("formResponse");

  if (name && email && message) {
    response.textContent = `Thank you, ${name}! Your message has been sent.`;
    response.style.color = "green";
    this.reset();
  } else {
    response.textContent = "Please fill in all fields.";
    response.style.color = "red";
  }
});
