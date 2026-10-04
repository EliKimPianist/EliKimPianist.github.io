/* ========================================
   PERFORMANCE DATABASE
======================================== */

const performances = [

  {
    date: "2026-04-11",
    time: "3:30 PM",
    venue: "Smith Memorial Recital Hall",
    location: "Illinois, USA",
    type: "Doctoral Solo Recital"
  },

  {
    date: "2026-04-28",
    time: "7:30 PM",
    venue: "Smith Memorial Recital Hall",
    location: "Illinois, USA",
    type: "Doctoral Solo Recital"
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
    type: "Lunchtime Recital"
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
    type: "Lunchtime Recital"
  },

  {
    date: "2026-10-30",
    time: "1:00 PM",
    venue: "Cross Street Unitarian Chapel",
    location: "Manchester, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2027-01-21",
    time: "1:05 PM",
    venue: "St Mary-le-Bow Church",
    location: "London, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2027-02-15",
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
    type: "Lunchtime Recital"
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
    date: "2028-01-10",
    time: "1:10 PM",
    venue: "All Saints’ High Wycombe",
    location: "Buckinghamshire, UK",
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
   DATE FUNCTIONS
======================================== */

function parseLocalDate(dateString) {

  const [year, month, day] =
    dateString.split("-").map(Number);

  return new Date(
    year,
    month - 1,
    day
  );
}


function getToday() {

  const now = new Date();

  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );
}


function formatPerformanceDate(dateString) {

  const date =
    parseLocalDate(dateString);

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];

  const day =
    String(date.getDate())
      .padStart(2, "0");

  const month =
    months[date.getMonth()];

  const year =
    date.getFullYear();

  return `${day} ${month} ${year}`;
}



/* ========================================
   PERFORMANCE ELEMENT
======================================== */

function createPerformanceElement(performance) {

  const article =
    document.createElement("article");

  article.className =
    "event";

  const dateAndTime =
    performance.time
      ? `${formatPerformanceDate(performance.date)} · ${performance.time}`
      : formatPerformanceDate(performance.date);

  article.innerHTML = `

    <div class="date">
      ${dateAndTime}
    </div>

    <div>

      <h3>
        ${performance.venue}
      </h3>

      <p>
        ${performance.location} · ${performance.type}
      </p>

    </div>

  `;

  return article;
}



/* ========================================
   AUTOMATIC SCHEDULE
======================================== */

function renderSchedule() {

  const upcomingList =
    document.querySelector("#upcoming-list");

  const pastList =
    document.querySelector("#past-list");

  if (!upcomingList || !pastList) {
    return;
  }

  const today =
    getToday();

  const upcoming =
    performances
      .filter(
        performance =>
          parseLocalDate(performance.date) >= today
      )
      .sort(
        (a, b) =>
          parseLocalDate(a.date) -
          parseLocalDate(b.date)
      );

  const past =
    performances
      .filter(
        performance =>
          parseLocalDate(performance.date) < today
      )
      .sort(
        (a, b) =>
          parseLocalDate(b.date) -
          parseLocalDate(a.date)
      );

  upcomingList.innerHTML = "";
  pastList.innerHTML = "";

  upcoming.forEach(performance => {

    upcomingList.appendChild(
      createPerformanceElement(performance)
    );

  });

  past.forEach(performance => {

    pastList.appendChild(
      createPerformanceElement(performance)
    );

  });

}



/* ========================================
   GALLERY CAPTIONS
======================================== */

const galleryCaptions = {

  1: "London, UK · 2026",
  2: "Da Nang City, Vietnam · 2026",
  3: "Ho Chi Minh City, Vietnam · 2026",
  4: "Hong Kong · 2026",
  5: "California, USA · 2025",
  6: "Illinois, USA · 2024",
  7: "Ho Chi Minh City, Vietnam · 2026",
  8: "Da Nang City, Vietnam · 2026",
  9: "Illinois, USA · 2026",
  10: "Hong Kong · 2026",
  11: "California, USA · 2025",
  12: "Da Nang City, Vietnam · 2026",
  13: "Seoul, South Korea · 2024"

};



/* ========================================
   AUTOMATIC GALLERY
======================================== */

const GALLERY_MAX_IMAGES = 50;

const GALLERY_INITIAL_VISIBLE = 6;


function galleryFileName(number) {

  const padded =
    String(number)
      .padStart(2, "0");

  return `gallery-${padded}.jpg`;
}



/* ========================================
   CHECK IMAGE
======================================== */

function checkGalleryImage(number) {

  return new Promise(resolve => {

    const src =
      galleryFileName(number);

    const testImage =
      new Image();

    testImage.onload = () => {

      resolve({
        number,
        src
      });

    };

    testImage.onerror = () => {

      resolve(null);

    };

    testImage.src =
      src;

  });

}



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


  imageFrame.appendChild(image);

  item.appendChild(imageFrame);


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

    item.appendChild(caption);

  }


  return item;
}



/* ========================================
   RENDER GALLERY
======================================== */

async function renderGallery() {

  const galleryGrid =
    document.querySelector(
      "#gallery-grid"
    );

  const galleryToggle =
    document.querySelector(
      "#gallery-toggle"
    );

  const galleryMoreWrap =
    document.querySelector(
      "#gallery-more-wrap"
    );


  if (
    !galleryGrid ||
    !galleryToggle ||
    !galleryMoreWrap
  ) {

    return;

  }


  const checks = [];


  for (
    let number = 1;
    number <= GALLERY_MAX_IMAGES;
    number++
  ) {

    checks.push(
      checkGalleryImage(number)
    );

  }


  const results =
    await Promise.all(checks);


  const existingImages =
    results
      .filter(Boolean)
      .sort(
        (a, b) =>
          a.number - b.number
      );


  galleryGrid.innerHTML =
    "";


  existingImages.forEach(
    (imageData, index) => {

      galleryGrid.appendChild(
        createGalleryItem(
          imageData,
          index
        )
      );

    }
  );


  if (
    existingImages.length <=
    GALLERY_INITIAL_VISIBLE
  ) {

    galleryMoreWrap.hidden =
      true;

    return;

  }


  galleryMoreWrap.hidden =
    false;


  galleryToggle.addEventListener(
    "click",
    () => {

      const expanded =
        galleryGrid
          .classList
          .toggle("expanded");


      if (expanded) {

        galleryToggle.innerHTML =
          `SHOW LESS <span>↑</span>`;

      } else {

        galleryToggle.innerHTML =
          `MORE PHOTOS <span>↓</span>`;

      }

    }
  );

}



/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );


if (
  "IntersectionObserver"
  in window
) {

  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target
              .classList
              .add("visible");

            observer.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: 0.1
      }

    );


  revealElements.forEach(
    element => {

      observer.observe(
        element
      );

    }
  );

} else {

  revealElements.forEach(
    element => {

      element.classList.add(
        "visible"
      );

    }
  );

}



/* ========================================
   HEADER
======================================== */

const header =
  document.querySelector(
    ".site-header"
  );


function updateHeader() {

  if (!header) {
    return;
  }

  header.classList.toggle(
    "scrolled",
    window.scrollY > 30
  );

}


window.addEventListener(
  "scroll",
  updateHeader,
  {
    passive: true
  }
);



/* ========================================
   START
======================================== */

renderSchedule();

renderGallery();

updateHeader();
