const revealElements = document.querySelectorAll(".reveal");
const header = document.querySelector(".site-header");


/* ========================================
   SCROLL REVEAL
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
    threshold: 0.1
  }

);


revealElements.forEach((element) => {

  observer.observe(element);

});


/* ========================================
   HEADER
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
