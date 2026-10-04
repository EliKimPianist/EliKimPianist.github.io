/* ========================================
   PERFORMANCE DATABASE

   앞으로 새 공연이 생기면
   이 리스트에만 추가하면 됩니다.

   date 형식은 반드시:
   YYYY-MM-DD
======================================== */

const performances = [

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
    type: "Recital"
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
    type: "Recital"
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
    type: "Recital"
  },

  {
    date: "2027-11-06",
    venue: "St Alfege Greenwich",
    location: "London, UK",
    type: "Recital"
  },

  {
    date: "2028-01-10",
    venue: "All Saints’ High Wycombe",
    location: "Buckinghamshire, UK",
    type: "Recital"
  },

  {
    date: "2029-06-19",
    venue: "Romsey Abbey",
    location: "Hampshire, UK",
    type: "Recital"
  }

];



/* ========================================
   DATE FUNCTIONS
======================================== */

/*
  "2027-06-16" 같은 날짜를
  사용자의 현지 시간 기준 Date로 변환.

  UTC 문제 때문에 new Date("2027-06-16")
  방식을 일부러 사용하지 않습니다.
*/

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


/*
  오늘 날짜를 00:00 기준으로 만듭니다.
*/

function getToday() {

  const now = new Date();

  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

}


/*
  날짜 표시:
  2026-10-15
  →
  15 OCT 2026
*/

function formatPerformanceDate(dateString) {

  const date = parseLocalDate(dateString);

  const monthNames = [
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
    monthNames[date.getMonth()];

  const year =
    date.getFullYear();

  return `${day} ${month} ${year}`;

}



/* ========================================
   SCHEDULE SORTING
======================================== */

function renderSchedule() {

  const upcomingList =
    document.querySelector("#upcoming-list");

  const pastList =
    document.querySelector("#past-list");


  if (!upcomingList || !pastList) {
    return;
  }


  const today = getToday();


  /*
    공연 당일은 아직 Upcoming으로 둡니다.

    다음 날이 되면 자동으로 Past로 이동.
  */

  const upcoming =
    performances
      .filter((performance) => {

        return (
          parseLocalDate(performance.date)
          >= today
        );

      })
      .sort((a, b) => {

        return (
          parseLocalDate(a.date)
          -
          parseLocalDate(b.date)
        );

      });


  const past =
    performances
      .filter((performance) => {

        return (
          parseLocalDate(performance.date)
          < today
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
     UPCOMING
  ====================================== */

  upcomingList.innerHTML = "";


  upcoming.forEach((performance) => {

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
          ${performance.type
            ? ` · ${performance.type}`
            : ""
          }
        </p>

      </div>

    `;


    upcomingList.appendChild(article);

  });



  /* =====================================
     PAST
  ====================================== */

  pastList.innerHTML = "";


  past.forEach((performance) => {

    const item =
      document.createElement("p");


    item.innerHTML = `

      <span>
        ${formatPerformanceDate(performance.date)}
      </span>

      ${performance.venue}
      ·
      ${performance.location}

    `;


    pastList.appendChild(item);

  });

}



/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

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
  (element) => {

    observer.observe(element);

  }
);



/* ========================================
   HEADER SCROLL
======================================== */

const header =
  document.querySelector(".site-header");


function updateHeader() {

  if (!header) {
    return;
  }


  if (window.scrollY > 30) {

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

updateHeader();
