const revealElements = document.querySelectorAll(".reveal");
const header = document.querySelector(".site-header");
const heroImage = document.querySelector(".hero-image");
const heroOverlay = document.querySelector(".hero-overlay");


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
   PARALLAX HERO
========================= */

let ticking = false;


function updateScrollEffects() {

  const scrollY = window.scrollY;

  const isMobile = window.innerWidth <= 760;


  /* Header becomes slightly smaller */

  if (scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }


  /*
    Desktop only:
    image moves more slowly than page,
    text drifts upward slightly faster.
  */

  if (!isMobile) {

    const imageMove = Math.min(scrollY * 0.12, 70);

    const textMove = Math.min(scrollY * 0.18, 95);

    const textFade = Math.max(
      0,
      1 - scrollY / 650
    );


    heroImage.style.transform =
      `translate3d(0, ${imageMove}px, 0) scale(1.015)`;


    heroOverlay.style.transform =
      `translate3d(0, -${textMove}px, 0)`;


    heroOverlay.style.opacity =
      textFade;

  } else {

    heroImage.style.transform = "none";

    heroOverlay.style.transform = "none";

    heroOverlay.style.opacity = "1";

  }


  ticking = false;
}


window.addEventListener(
  "scroll",
  () => {

    if (!ticking) {

      window.requestAnimationFrame(
        updateScrollEffects
      );

      ticking = true;

    }

  },
  {
    passive: true
  }
);


window.addEventListener(
  "resize",
  updateScrollEffects
);


updateScrollEffects();
