/* ========================================
   PERFORMANCE DATABASE
======================================== */

const performances = [

  /* 2026 */

  {
    date: "2026-04-11",
    venue: "Smith Memorial Recital Hall",
    location: "Illinois, USA",
    type: "Doctoral Solo Recital"
  },

  {
    date: "2026-04-28",
    venue: "Smith Memorial Recital Hall",
    location: "Illinois, USA",
    type: "Doctoral Solo Recital"
  },

  {
    date: "2026-05-02",
    venue: "The Windsor of Savoy",
    location: "Illinois, USA",
    type: "Resonance Concert"
  },

  {
    date: "2026-06-17",
    venue: "Chungmu Art Center",
    location: "Seoul, Republic of Korea",
    type: "Junggu Wednesday Concert"
  },

  {
    date: "2026-08-13",
    venue: "S Talent Academy",
    location: "Da Nang, Vietnam",
    type: "Piano Duo Recital"
  },

  {
    date: "2026-08-16",
    venue: "Duc Tri Piano Boutique",
    location: "Ho Chi Minh City, Vietnam",
    type: "Recital"
  },

  {
    date: "2026-08-18",
    venue: "Harmony Bechstein Academy",
    location: "Ho Chi Minh City, Vietnam",
    type: "Recital"
  },

  {
    date: "2026-10-01",
    venue: "St Olave’s Hart Street",
    location: "London, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2026-10-15",
    venue: "St John’s College, University of Cambridge",
    location: "Cambridge, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2026-10-21",
    venue: "St Dunstan in the West",
    location: "London, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2026-10-30",
    venue: "Cross Street Unitarian Chapel",
    location: "Manchester, UK",
    type: "Lunchtime Recital"
  },


  /* 2027 */

  {
    date: "2027-01-21",
    venue: "St Mary-le-Bow Church",
    location: "London, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2027-02-15",
    venue: "Pusey House",
    location: "Oxford, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2027-06-16",
    venue: "St Patrick’s Cathedral",
    location: "Dublin, Ireland",
    type: "Lunchtime Recital"
  },

  {
    date: "2027-06-17",
    venue: "St Ann’s Church",
    location: "Dublin, Ireland",
    type: "Lunchtime Recital"
  },

  {
    date: "2027-06-22",
    venue: "St James’s Sussex Gardens",
    location: "London, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2027-06-25",
    venue: "Christ Church East Sheen",
    location: "London, UK",
    type: "Recital"
  },

  {
    date: "2027-07-12",
    venue: "St Stephen’s",
    location: "Bristol, UK",
    type: "Lunchtime Recital"
  },

  {
    date: "2027-11-06",
    venue: "St Alfege Greenwich",
    location: "London, UK",
    type: "Lunchtime Recital"
  },


  /* 2028 */

  {
    date: "2028-01-10",
    venue: "All Saints’ High Wycombe",
    location: "Buckinghamshire, UK",
    type: "Lunchtime Recital"
  },


  /* 2029 */

  {
    date: "2029-06-19",
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
    dateString
      .split("-")
      .map(Number);


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


  article.className = "event";


  article.innerHTML = `

    <div class="date">
      ${formatPerformanceDate(performance.date)}
    </div>

    <div>

      <h3>
        ${performance.venue}
      </h3>

      <p>
        ${performance.location}
        ${
          performance.type
            ? ` · ${performance.type}`
            : ""
        }
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
    document.querySelector(
      "#upcoming-list"
    );


  const pastList =
    document.querySelector(
      "#past-list"
    );


  if (!upcomingList || !pastList) {
    return;
  }


  const today =
    getToday();


  /*
    공연 당일 = Upcoming
    다음 날부터 = Past
  */

  const upcoming =
    performances
      .filter((performance) =>

        parseLocalDate(
          performance.date
        ) >= today

      )
      .sort((a, b) =>

        parseLocalDate(a.date)
        -
        parseLocalDate(b.date)

      );


  const past =
    performances
      .filter((performance) =>

        parseLocalDate(
          performance.date
        ) < today

      )
      .sort((a, b) =>

        parseLocalDate(b.date)
        -
        parseLocalDate(a.date)

      );


  upcomingList.innerHTML = "";

  pastList.innerHTML = "";


  upcoming.forEach(
    (performance) => {

      upcomingList.appendChild(
        createPerformanceElement(
          performance
        )
      );

    }
  );


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



/* ========================================
   AUTOMATIC GALLERY

   파일 이름:

   gallery-01.jpg
   gallery-02.jpg
   gallery-03.jpg
   ...

   실제로 존재하는 파일만 표시됩니다.
======================================== */

const GALLERY_MAX_IMAGES = 40;
const GALLERY_INITIAL_VISIBLE = 6;


function galleryFileName(number) {

  const paddedNumber =
    String(number)
      .padStart(2, "0");


  return `gallery-${paddedNumber}.jpg`;

}



/*
  사진이 실제로 존재하는지 확인.

  없는 파일은 화면에 추가하지 않습니다.
*/

function checkGalleryImage(number) {

  return new Promise((resolve) => {

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


    testImage.src = src;

  });

}



/* ========================================
   GALLERY ITEM
======================================== */

function createGalleryItem(
  imageData,
  index
) {

  const item =
    document.createElement("div");


  item.className = "gallery-item";


  if (
    index >=
    GALLERY_INITIAL_VISIBLE
  ) {

    item.classList.add(
      "gallery-extra"
    );

  }


  const image =
    document.createElement("img");


  image.src =
    imageData.src;


  image.alt =
    "Eli Sunghyun Kim";


  image.loading =
    "lazy";


  item.appendChild(image);


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


  /*
    gallery-01.jpg ~ gallery-40.jpg
    존재 여부 검사
  */

  const imageChecks = [];


  for (
    let i = 1;
    i <= GALLERY_MAX_IMAGES;
    i++
  ) {

    imageChecks.push(
      checkGalleryImage(i)
    );

  }


  const results =
    await Promise.all(
      imageChecks
    );


  /*
    존재하는 사진만 남김.
    번호 순서는 자동 유지.
  */

  const existingImages =
    results.filter(Boolean);


  galleryGrid.innerHTML = "";


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


  /*
    사진이 6장 이하라면
    MORE PHOTOS 버튼 자체를 숨김.
  */

  if (
    existingImages.length <=
    GALLERY_INITIAL_VISIBLE
  ) {

    galleryMoreWrap.hidden = true;

    return;

  }


  galleryMoreWrap.hidden = false;



  /* =====================================
     MORE PHOTOS BUTTON
  ====================================== */

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


        document
          .querySelector("#gallery")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

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
              .add("visible");


            observer.unobserve(
              entry.target
            );

          }

        }
      );

    },

    {
      threshold: 0.1
    }

  );


revealElements.forEach(
  (element) => {

    observer.observe(
      element
    );

  }
);



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


  if (
    window.scrollY > 30
  ) {

    header
      .classList
      .add("scrolled");

  } else {

    header
      .classList
      .remove("scrolled");

  }

}



window.addEventListener(
  "scroll",
  updateHeader,
  {
    passive: true
  }
);



/* ========================================
   START WEBSITE
======================================== */

renderSchedule();

renderGallery();

updateHeader();
