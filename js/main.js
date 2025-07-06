// 🌙 Theme Toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
});

// ❓ FAQ Accordion Toggle
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const arrow = btn.querySelector(".arrow");

    // Toggle answer visibility
    if (answer.style.display === "block") {
      answer.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
    } else {
      answer.style.display = "block";
      arrow.style.transform = "rotate(90deg)";
    }
  });
});
// Optional client-side check
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting.");
    e.preventDefault();
  }
});
