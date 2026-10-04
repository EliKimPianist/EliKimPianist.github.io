const revealElements = document.querySelectorAll(".reveal");
const header = document.querySelector(".site-header");


/* ========================================
   SECTION REVEAL
======================================== */

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


/* ========================================
   HEADER SCROLL
======================================== */

function updateHeader() {

  if (window.scrollY > 30) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

}


window.addEventListener(
  "scroll",
  updateHeader,
  { passive: true }
);


updateHeader();
