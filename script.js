/* ========================================
   PERFORMANCE DATABASE

   새 공연이 생기면 여기에만 추가하면 됩니다.

   date:
   YYYY-MM-DD
======================================== */

const performances = [

  /* =====================================
     2026
  ====================================== */

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


  /* =====================================
     2027
  ====================================== */

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


  /* =====================================
     2028
  ====================================== */

  {
    date: "2028-01-10",
    venue: "All Saints’ High Wycombe",
    location: "Buckinghamshire, UK",
    type: "Lunchtime Recital"
  },


  /* =====================================
     2029
  ====================================== */

  {
    date: "2029-06-19",
    venue: "Romsey Abbey",
    location: "Hampshire, UK",
    type: "Lunchtime Recital"
  }

];



/* ========================================
   DATE
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
   CREATE EVENT
======================================== */

function createPerformanceElement(performance) {

  const article =
    document.createElement("article");

  article.className = "event";


  article.innerHTML = `

    <div class="date">

      ${formatPerformanceDate(
        performance.date
      )}

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
   RENDER SCHEDULE
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



  /* =====================================
     UPCOMING

     공연 당일까지 Upcoming.
     다음 날 Past로 이동.
  ====================================== */

  const upcoming =
    performances
      .filter((performance) => {

        return (
          parseLocalDate(
            performance.date
          ) >= today
        );

      })
      .sort((a, b) => {

        return (
          parseLocalDate(a.date)
          -
          parseLocalDate(b.date)
        );

      });



  /* =====================================
     PAST

     가장 최근 공연이 위.
  ====================================== */

  const past =
    performances
      .filter((performance) => {

        return (
          parseLocalDate(
            performance.date
          ) < today
        );

      })
      .sort((a, b) => {

        return (
          parseLocalDate(b.date)
          -
          parseLocalDate(a.date)
        );

      });



  /* =====================================
     DISPLAY UPCOMING
  ====================================== */

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



  /* =====================================
     DISPLAY PAST
  ====================================== */

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
   START
======================================== */

renderSchedule();

updateHeader();
