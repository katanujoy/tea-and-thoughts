// Smooth scrolling for navigation links
document.querySelectorAll(".nav-container a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (!targetId) return;

    if (targetId.startsWith("#")) {
      document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = targetId;
    }
  });
});
