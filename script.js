const pages = document.querySelectorAll(".page");

let currentPage = 0;

let attempts = 0;

function checkPassword() {
  const password = document.getElementById("password").value.toLowerCase();

  const error = document.getElementById("error");

  if (password === "meow") {
    pages[currentPage].classList.remove("active");

    currentPage++;

    pages[currentPage].classList.add("active");
  } else {
    attempts++;

    if (attempts === 1) {
      error.innerText = "not that one. think softer.";
    } else if (attempts === 2) {
      error.innerText = "you used to spam this in voice notes ";
    } else {
      error.innerText = "sounds that cats make 😵‍💫";
    }
  }
}

/* NEXT PAGE */

function nextPage() {
  pages[currentPage].classList.remove("active");

  currentPage++;

  pages[currentPage].classList.add("active");
}

/* PREV PAGE */

function prevPage() {
  if (currentPage > 1) {
    pages[currentPage].classList.remove("active");

    currentPage--;

    pages[currentPage].classList.add("active");
  }
}

/* FINAL MESSAGE */

function showMeetForm() {
  const form = document.getElementById("meet-form");
  if (form) {
    form.classList.remove("hidden");
  }

  const yesPopup = document.getElementById("yes-popup-img");
  if (yesPopup) {
    yesPopup.classList.add("show");
    setTimeout(() => {
      yesPopup.classList.remove("show");
    }, 2000);
  }
}

function confirmMeet() {
  const day = document.getElementById("meet-day").value;
  const time = document.getElementById("meet-time").value;
  const msg = document.getElementById("final-message");

  if (!day || !time) {
    msg.innerText = "pick both a day and time, meow 🥺";
    return;
  }

  /* format time nicely */
  const [h, m] = time.split(":");
  const hour = parseInt(h);
  const ampm = hour >= 12 ? "pm" : "am";
  const hour12 = hour % 12 || 12;
  const timeStr = hour12 + ":" + m + " " + ampm;

  document.getElementById("meet-form").classList.add("hidden");
  msg.innerHTML = "i'll be waiting on <strong>" + day + "</strong> at <strong>" + timeStr + "</strong> after your coaching ♡<br><br>see you there, meow 🐾";
}

/* YES BUTTON POPUP ON HOVER */

const yesBtn = document.getElementById("yes-btn");
const yesPopup = document.getElementById("yes-popup-img");

if (yesBtn && yesPopup) {
  yesBtn.addEventListener("mouseenter", () => {
    yesPopup.classList.add("show");
  });

  yesBtn.addEventListener("mouseleave", () => {
    yesPopup.classList.remove("show");
  });
}

/* RUNAWAY NO BUTTON + POPUP IMAGE */

const noBtn = document.getElementById("no-btn");
const noPopup = document.getElementById("no-popup-img");

const noMessages = [
  "are you sure? 🥺",
  "really? look at this face...",
  "you can't say no to meow 🐱",
  "think again... 👉👈",
  "nope, try again ♡",
  "this button doesn't work 😤",
  "wrong answer meow 🐾",
  "not an option sorry 😭",
];

let noAttempts = 0;

if (noBtn && noPopup) {
  noBtn.addEventListener("mouseenter", () => {
    /* move button to random spot */
    const container = noBtn.closest(".final-buttons");
    const maxX = container.offsetWidth - noBtn.offsetWidth;
    const maxY = container.offsetHeight - noBtn.offsetHeight;
    const x = Math.random() * Math.max(maxX, 200);
    const y = Math.random() * Math.max(maxY, 100);
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    /* show popup image */
    noPopup.classList.add("show");
  });

  noBtn.addEventListener("mouseleave", () => {
    noPopup.classList.remove("show");
  });

  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });
}
