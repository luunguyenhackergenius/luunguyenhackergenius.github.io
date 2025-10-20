/* ===============================
   Mansion Page JavaScript
   =============================== */

// Wait for the DOM to load before running scripts
document.addEventListener("DOMContentLoaded", function () {
  console.log("Mansion page loaded successfully!");

  /* ===============================
     Smooth Scroll for Navigation Links
     =============================== */
  const navLinks = document.querySelectorAll('a.nav-link[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });

  /* ===============================
     Scroll Animation for Sections
     =============================== */
  const revealElements = document.querySelectorAll("main h2, main h3, main p, .carousel");
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  };
  
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger once on page load

  /* ===============================
     Back to Top Button
     =============================== */
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑";
  backToTop.id = "backToTop";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.setAttribute("title", "Back to top");
  backToTop.tabIndex = 0;
  document.body.appendChild(backToTop);

  backToTop.style.position = "fixed";
  backToTop.style.bottom = "30px";
  backToTop.style.right = "30px";
  backToTop.style.padding = "10px 14px";
  backToTop.style.border = "none";
  backToTop.style.borderRadius = "50%";
  backToTop.style.backgroundColor = "#ffc107";
  backToTop.style.color = "#212529";
  backToTop.style.fontSize = "1.2rem";
  backToTop.style.cursor = "pointer";
  backToTop.style.display = "none";
  backToTop.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  backToTop.style.transition = "all 0.3s ease";
  

  window.addEventListener("scroll", function () {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });
  // Click to scroll to top
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Keyboard accessibility
  backToTop.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});
