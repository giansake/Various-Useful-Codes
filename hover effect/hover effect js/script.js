const container = document.querySelector(".effect-container");

container.addEventListener("mouseenter", () => {
  container.classList.remove("hover-out");
  container.classList.add("hover-in");
});

container.addEventListener("mouseleave", () => {
  container.classList.remove("hover-in");
  container.classList.add("hover-out");
});
