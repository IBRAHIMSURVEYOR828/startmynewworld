// Data for Projects
const projects = [
  { title: "Project 1", description: "An innovative solution for problem X.", link: "#" },
  { title: "Project 2", description: "A creative project tackling challenge Y.", link: "#" },
  { title: "Project 3", description: "A modern approach to achieving Z.", link: "#" },
  { title: "Project 4", description: "A fun and engaging project on topic W.", link: "#" },
];

// Data for Services
const services = [
  { title: "Web Development", description: "Crafting responsive and user-friendly websites." },
  { title: "App Development", description: "Building scalable mobile and desktop applications." },
  { title: "UI/UX Design", description: "Designing seamless and visually appealing interfaces." },
  { title: "SEO Optimization", description: "Boosting website visibility on search engines." },
];

// Function to populate cards
function populateCards(containerId, data, isLink = false) {
  const container = document.getElementById(containerId);

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      ${isLink ? `<a href="${item.link}" target="_blank">Learn More</a>` : ""}
    `;

    container.appendChild(card);
  });
}

// Populate Project and Service Cards
populateCards("project-list", projects, true);
populateCards("service-list", services);

// Form Submission Handling
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you for reaching out! I'll get back to you soon.");
  contactForm.reset();
});
