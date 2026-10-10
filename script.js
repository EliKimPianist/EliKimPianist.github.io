/* ========================================
   GOOGLE ANALYTICS
======================================== */

window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

window.gtag = gtag;

const googleAnalyticsScript = document.createElement("script");

googleAnalyticsScript.async = true;

googleAnalyticsScript.src =
  "https://www.googletagmanager.com/gtag/js?id=G-F1BVP6STJG";

document.head.appendChild(googleAnalyticsScript);

gtag("js", new Date());

gtag("config", "G-F1BVP6STJG");



/* ========================================
   PERFORMANCE DATABASE
======================================== */

const performances = [

   {
  date: "2028-01-19",
  time: "12:45 PM",
  venue: "Espace Bernanos",
  location: "Paris, France",
  type: "Solo Recital"
},
   
  {
    date: "2026-04-11",
    time: "3:30 PM",
    venue: "Smith Memorial Recital Hall",
    location: "Illinois, USA",
    type: "Doctoral Solo Recital",
    link: "https://music.illinois.edu/about-us/events/sunghyun-kim-doctoral-piano-recital-1-of-2/"
  },

  {
    date: "2026-04-28",
    time: "7:30 PM",
    venue: "Smith Memorial Recital Hall",
    location: "Illinois, USA",
    type: "Doctoral Solo Recital",
    link: "https://music.illinois.edu/about-us/events/sunghyun-kim-doctoral-piano-recital-2-of-2/"
  },

  {
    date: "2026-08-13",
    time: "7:00 PM",
    venue: "S Talent Academy",
    location: "Da Nang, Vietnam",
    type: "Piano Duo Recital"
  },

  {
    date: "2026-08-16",
    time: "6:30 PM",
    venue: "Duc Tri Piano Boutique",
    location: "Ho Chi Minh City, Vietnam",
    type: "Recital"
  },

  {
    date: "2026-08-18",
    time: "7:30 PM",
    venue: "Harmony Bechstein Academy",
    location: "Ho Chi Minh City, Vietnam",
    type: "Recital"
  },

  {
    date: "2026-10-01",
    time: "1:00 PM",
    venue: "St Olave’s Hart Street",
    location: "London, UK",
    type: "Lunchtime Recital",
    link: "https://saintolave.com/index.php/2026/09/28/lunchtime-concerts-thursday-1-october-eli-sunghyun-kim/"
  },

  {
    date: "2026-10-15",
    time: "1:15 PM",
    venue: "St John’s College, University of Cambridge",
    location: "Cambridge, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2026-10-21",
    time: "1:15 PM",
    venue: "St Dunstan in the West",
    location: "London, UK",
    type: "Lunchtime Recital",
    link: "https://www.eventbrite.com/e/eli-sunghyun-kim-lunchtime-piano-recital-tickets-2002427027142"
  },

  {
    date: "2026-10-30",
    time: "1:00 PM",
    venue: "Cross Street Unitarian Chapel",
    location: "Manchester, UK",
    type: "Lunchtime Recital",
    link: "https://www.ticketsource.com/cross-street-unitarian-chapel/eli-sunghyun-kim-piano-free-friday-lunchtime-recital/e-pmbjpk"
  },

  {
    date: "2027-01-21",
    time: "1:05 PM",
    venue: "St Mary-le-Bow Church",
    location: "London, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2027-01-28",
    time: "1:00 PM",
    venue: "University Church of St Mary the Virgin",
    location: "Oxford, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2027-03-09",
    time: "1:10 PM",
    venue: "Pusey House",
    location: "Oxford, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2027-06-16",
    time: "1:00 PM",
    venue: "St Patrick’s Cathedral",
    location: "Dublin, Ireland",
    type: "Lunchtime Recital"
  },

  {
    date: "2027-06-17",
    time: "12:45 PM",
    venue: "St Ann’s Church",
    location: "Dublin, Ireland",
    type: "Lunchtime Recital",
    link: "https://www.stannsrecitals.com/events/eli-sunghyun-kim"
  },

  {
    date: "2027-06-22",
    time: "1:00 PM",
    venue: "St James’s Sussex Gardens",
    location: "London, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2027-06-25",
    time: "7:00 PM",
    venue: "Christ Church East Sheen",
    location: "London, UK",
    type: "Recital"
  },

  {
    date: "2027-06-30",
    time: "1:15 PM",
    venue: "St Paul's Clifton",
    location: "Bristol, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2027-07-12",
    time: "1:10 PM",
    venue: "St Stephen’s",
    location: "Bristol, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2027-11-06",
    time: "1:05 PM",
    venue: "St Alfege Greenwich",
    location: "London, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2028-01-06",
    time: "1:10 PM",
    venue: "St Matthew’s Redhill",
    location: "Redhill, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2028-01-10",
    time: "1:10 PM",
    venue: "All Saints’ High Wycombe",
    location: "Buckinghamshire, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2028-03-29",
    time: "2:00 PM",
    venue: "St Nicholas of Myra",
    location: "Brighton, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2029-06-19",
    time: "1:00 PM",
    venue: "Romsey Abbey",
    location: "Hampshire, UK",
    type: "Lunchtime Recital"
  }

];

/* ========================================
   PERFORMANCE DATE FUNCTIONS
======================================== */

function getPerformanceDate(dateString) {

  const [year, month, day] =
    dateString.split("-").map(Number);

  return new Date(
    year,
    month - 1,
    day
  );

}


function formatPerformanceDate(dateString) {

  const date =
    getPerformanceDate(dateString);

  return date
    .toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }
    )
    .toUpperCase();

}


/* ========================================
   CREATE PERFORMANCE
======================================== */

function createPerformanceElement(performance) {

  const event =
    document.createElement("div");

  event.className = "event";


  const date =
    document.createElement("div");

  date.className = "date";


  const dateAndTime =
    performance.time
      ? `${formatPerformanceDate(performance.date)} · ${performance.time}`
      : formatPerformanceDate(performance.date);


  date.textContent =
    dateAndTime;



  const details =
    document.createElement("div");

  details.className =
    "event-details";


  const venue =
    document.createElement("h3");

  venue.textContent =
    performance.venue;


  const info =
    document.createElement("p");

  info.textContent =
    `${performance.location} · ${performance.type}`;


  details.appendChild(venue);

  details.appendChild(info);



  /* DATE */

  event.appendChild(date);



  /* DETAILS */

  event.appendChild(details);



  /* MORE INFO */

  if (performance.link) {

    const link =
      document.createElement("a");

    link.className =
      "event-more-info";

    link.href =
      performance.link;

    link.target =
      "_blank";

    link.rel =
      "noopener noreferrer";

    link.textContent =
      "MORE INFO →";

    link.setAttribute(
      "aria-label",
      `More information about ${performance.venue}`
    );


    event.appendChild(link);

  }


  return event;

}



/* ========================================
   RENDER PERFORMANCE SCHEDULE
======================================== */

function renderPerformances() {

  const upcomingList =
    document.getElementById(
      "upcoming-list"
    );

  const pastList =
    document.getElementById(
      "past-list"
    );


  if (
    !upcomingList &&
    !pastList
  ) {
    return;
  }


  const today =
    new Date();

  today.setHours(
    0,
    0,
    0,
    0
  );


  const upcoming =
    performances
      .filter((performance) => {

        const date =
          getPerformanceDate(
            performance.date
          );

        return date >= today;

      })
      .sort((a, b) => {

        return (
          getPerformanceDate(a.date) -
          getPerformanceDate(b.date)
        );

      });


  const past =
    performances
      .filter((performance) => {

        const date =
          getPerformanceDate(
            performance.date
          );

        return date < today;

      })
      .sort((a, b) => {

        return (
          getPerformanceDate(b.date) -
          getPerformanceDate(a.date)
        );

      });



  if (upcomingList) {

    upcomingList.innerHTML = "";

    upcoming.forEach(
      (performance) => {

        upcomingList.appendChild(
          createPerformanceElement(
            performance
          )
        );

      }
    );

  }



  if (pastList) {

    pastList.innerHTML = "";

    past.forEach(
      (performance) => {

        pastList.appendChild(
          createPerformanceElement(
            performance
          )
        );

      }
    );

  }

}



/* ========================================
   GALLERY CAPTIONS
======================================== */

const galleryCaptions = {

  1: "London · 2026",

  2: "Da Nang · 2026",

  3: "Ho Chi Minh City · 2026",

  4: "Hong Kong · 2026",

  5: "California, USA · 2025",

  6: "Illinois, USA · 2024",

  7: "Ho Chi Minh City · 2026",

  8: "Da Nang · 2026",

  9: "Illinois, USA · 2026",

  10: "Hong Kong · 2026",

  11: "California, USA · 2025",

  12: "Da Nang · 2026",

  13: "Seoul, South Korea · 2024"

};


const GALLERY_INITIAL_VISIBLE =
  6;


const GALLERY_MAX =
  50;



/* ========================================
   CREATE GALLERY ITEM
======================================== */

function createGalleryItem(
  imageData,
  index
) {

  const item =
    document.createElement("div");

  item.className =
    "gallery-item";


  if (
    index >=
    GALLERY_INITIAL_VISIBLE
  ) {

    item.classList.add(
      "gallery-extra"
    );

    item.hidden = true;

  }


  const imageFrame =
    document.createElement("div");

  imageFrame.className =
    "gallery-image-frame";


  const image =
    document.createElement("img");

  image.src =
    imageData.src;

  image.alt =
    "Eli Sunghyun Kim performance";

  image.loading =
    "lazy";


  imageFrame.appendChild(
    image
  );

  item.appendChild(
    imageFrame
  );


  const captionText =
    galleryCaptions[
      imageData.number
    ];


  if (captionText) {

    const caption =
      document.createElement("p");

    caption.className =
      "gallery-caption";

    caption.textContent =
      captionText;


    item.appendChild(
      caption
    );

  }


  return item;

}



/* ========================================
   LOAD GALLERY
======================================== */

function loadGallery() {

  const galleryGrid =
    document.getElementById(
      "gallery-grid"
    );


  if (!galleryGrid) {
    return;
  }


  const galleryMoreWrap =
    document.getElementById(
      "gallery-more-wrap"
    );


  const galleryToggle =
    document.getElementById(
      "gallery-toggle"
    );


  const imageChecks =
    [];


  for (
    let i = 1;
    i <= GALLERY_MAX;
    i++
  ) {

    const number =
      String(i).padStart(
        2,
        "0"
      );


    const src =
      `gallery-${number}.jpg`;


    imageChecks.push(

      new Promise(
        (resolve) => {

          const image =
            new Image();


          image.onload =
            () => {

              resolve({
                number: i,
                src
              });

            };


          image.onerror =
            () => {

              resolve(null);

            };


          image.src =
            src;

        }
      )

    );

  }


  Promise
    .all(imageChecks)
    .then((results) => {

      const existingImages =
        results.filter(Boolean);


      galleryGrid.innerHTML =
        "";


      existingImages.forEach(
        (
          imageData,
          index
        ) => {

          galleryGrid.appendChild(
            createGalleryItem(
              imageData,
              index
            )
          );

        }
      );


      if (
        galleryMoreWrap &&
        galleryToggle &&
        existingImages.length >
          GALLERY_INITIAL_VISIBLE
      ) {

        galleryMoreWrap.hidden =
          false;


        let expanded =
          false;


        galleryToggle.addEventListener(
          "click",
          () => {

            expanded =
              !expanded;


            const extraItems =
              galleryGrid.querySelectorAll(
                ".gallery-extra"
              );


            extraItems.forEach(
              (item) => {

                item.hidden =
                  !expanded;

              }
            );


            galleryToggle.innerHTML =
              expanded
                ? 'SHOW LESS <span>↑</span>'
                : 'MORE PHOTOS <span>↓</span>';

          }
        );

      }

    });

}



/* ========================================
   HEADER SCROLL
======================================== */

function setupHeaderScroll() {

  const header =
    document.querySelector(
      ".site-header"
    );


  if (!header) {
    return;
  }


  function updateHeader() {

    if (
      window.scrollY > 20
    ) {

      header.classList.add(
        "scrolled"
      );

    } else {

      header.classList.remove(
        "scrolled"
      );

    }

  }


  updateHeader();


  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );

}



/* ========================================
   REVEAL ANIMATION
======================================== */

function setupRevealAnimation() {

  const revealElements =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    revealElements.length === 0
  ) {
    return;
  }


  if (
    !(
      "IntersectionObserver"
      in window
    )
  ) {

    revealElements.forEach(
      (element) => {

        element.classList.add(
          "visible"
        );

      }
    );

    return;

  }


  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target
                .classList
                .add(
                  "visible"
                );


              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },

      {
        threshold: 0.08
      }

    );


  revealElements.forEach(
    (element) => {

      observer.observe(
        element
      );

    }
  );

}



/* ========================================
   INITIALIZE
======================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderPerformances();

    loadGallery();

    setupHeaderScroll();

    setupRevealAnimation();

  }
);
