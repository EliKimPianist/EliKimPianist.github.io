const revealElements = document.querySelectorAll(".reveal");
const header = document.querySelector(".site-header");
const heroPhoto = document.querySelector(".hero-photo");


/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});


/* =========================
   HERO PARALLAX
========================= */

let ticking = false;

function updateScrollEffects() {
  const scrollY = window.scrollY;
  const isMobile = window.innerWidth <= 760;

  if (scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  if (!isMobile) {
    const heroMove = Math.min(scrollY * 0.30, 220);
    const heroScale = 1 + Math.min(scrollY * 0.00018, 0.045);

    heroPhoto.style.transform =
      `translate3d(0, -${heroMove}px, 0) scale(${heroScale})`;
  } else {
    const heroMove = Math.min(scrollY * 0.16, 85);

    heroPhoto.style.transform =
      `translate3d(0, -${heroMove}px, 0)`;
  }

  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  },
  { passive: true }
);

window.addEventListener("resize", updateScrollEffects);

updateScrollEffects();
