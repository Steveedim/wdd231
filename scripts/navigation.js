document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("show");
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    document.querySelectorAll(".course").forEach(course => {
      course.style.display =
        type === "all" || course.dataset.type === type ? "block" : "none";
    });
  });
});