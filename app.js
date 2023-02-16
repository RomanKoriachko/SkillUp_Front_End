// Navigation

let aboutLessonsBtn = document.querySelector(".about-lessons-btn");
let programBtn = document.querySelector(".program-btn");
let teachersBtn = document.querySelector(".teachers-btn");
let reviewBtn = document.querySelector(".review-btn");
let contactsBtn = document.querySelector(".contacts-btn");
let registrationBtns = document.querySelectorAll(".registration-btn");

let header = document.querySelector(".header");

let aspectSection = document.querySelector(".aspect-section");
let programSection = document.querySelector(".schedule-section");
let teachersSection = document.querySelector(".teacher-section");
let reviewSection = document.querySelector(".slider-section");
let footer = document.querySelector(".footer");

let formSection = document.querySelector(".form-section");

for (let i = 0; i < registrationBtns.length; i++) {
  registrationBtns[i].addEventListener("click", function () {
    window.scrollTo({
      top:
        formSection.getBoundingClientRect().top +
        window.pageYOffset -
        header.clientHeight,
      behavior: "smooth",
    });
  });
}

aboutLessonsBtn.addEventListener("click", function () {
  window.scrollTo({
    top:
      aspectSection.getBoundingClientRect().top +
      window.pageYOffset -
      header.clientHeight,
    behavior: "smooth",
  });
});
programBtn.addEventListener("click", function () {
  window.scrollTo({
    top:
      programSection.getBoundingClientRect().top +
      window.pageYOffset -
      header.clientHeight,
    behavior: "smooth",
  });
});
teachersBtn.addEventListener("click", function () {
  window.scrollTo({
    top:
      teachersSection.getBoundingClientRect().top +
      window.pageYOffset -
      header.clientHeight,
    behavior: "smooth",
  });
});
reviewBtn.addEventListener("click", function () {
  window.scrollTo({
    top:
      reviewSection.getBoundingClientRect().top +
      window.pageYOffset -
      header.clientHeight,
    behavior: "smooth",
  });
});
contactsBtn.addEventListener("click", function () {
  window.scrollTo({
    top:
      footer.getBoundingClientRect().top +
      window.pageYOffset -
      header.clientHeight,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  if (
    window.pageYOffset >=
      aspectSection.getBoundingClientRect().top +
        window.pageYOffset -
        header.clientHeight -
        1 &&
    aspectSection.getBoundingClientRect().bottom >= 0
  ) {
    aboutLessonsBtn.classList.add("active");
    programBtn.classList.remove("active");
    teachersBtn.classList.remove("active");
    reviewBtn.classList.remove("active");
    contactsBtn.classList.remove("active");
  } else {
    aboutLessonsBtn.classList.remove("active");
  }

  if (
    window.pageYOffset >=
      programSection.getBoundingClientRect().top +
        window.pageYOffset -
        header.clientHeight -
        1 &&
    programSection.getBoundingClientRect().bottom >= 0
  ) {
    aboutLessonsBtn.classList.remove("active");
    programBtn.classList.add("active");
    teachersBtn.classList.remove("active");
    reviewBtn.classList.remove("active");
    contactsBtn.classList.remove("active");
  } else {
    programBtn.classList.remove("active");
  }

  if (
    window.pageYOffset >=
      teachersSection.getBoundingClientRect().top +
        window.pageYOffset -
        header.clientHeight -
        1 &&
    teachersSection.getBoundingClientRect().bottom >= 0
  ) {
    aboutLessonsBtn.classList.remove("active");
    programBtn.classList.remove("active");
    teachersBtn.classList.add("active");
    reviewBtn.classList.remove("active");
    contactsBtn.classList.remove("active");
  } else {
    teachersBtn.classList.remove("active");
  }

  if (
    window.pageYOffset >=
      reviewSection.getBoundingClientRect().top +
        window.pageYOffset -
        header.clientHeight -
        1 &&
    reviewSection.getBoundingClientRect().bottom >= 0
  ) {
    aboutLessonsBtn.classList.remove("active");
    programBtn.classList.remove("active");
    teachersBtn.classList.remove("active");
    reviewBtn.classList.add("active");
    contactsBtn.classList.remove("active");
  } else {
    reviewBtn.classList.remove("active");
  }

  if (
    window.pageYOffset ===
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight ||
    document.documentElement.scrollHeight -
      document.documentElement.clientHeight -
      window.pageYOffset <
      1
  ) {
    aboutLessonsBtn.classList.remove("active");
    programBtn.classList.remove("active");
    teachersBtn.classList.remove("active");
    reviewBtn.classList.remove("active");
    contactsBtn.classList.add("active");
  } else {
    contactsBtn.classList.remove("active");
  }
});

// Dropdown Menu

let dropdownMenu = document.querySelectorAll(".schedule-section-item-wrapper");
let dropdownItem = document.querySelectorAll(".schedule-section-subitem");
let dropdownButton = document.querySelectorAll(".schedule-section-item-btn");

for (let i = 0; i < dropdownMenu.length; i++) {
  dropdownMenu[i].addEventListener("click", function () {
    dropdownItem[i].classList.toggle("active");
    dropdownButton[i].classList.toggle("active-btn");
  });
}

// Sliders

$(document).ready(function () {
  $(".slider").slick({});
});

$(document).ready(function () {
  $(".suitable-slider").slick({
    dots: true,
    centerMode: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".suitable-slider-mobile").slick({
    dots: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".plan-section-slider").slick({
    dots: true,
    centerMode: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".plan-section-mobile-slider").slick({
    dots: true,
    arrows: false,
    infinite: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".companies-slider").slick({
    arrows: false,
    infinite: true,
    centerMode: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});
$(document).ready(function () {
  $(".companies-tablet-slider").slick({
    arrows: false,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});

// slider cover

let slider = document.querySelector(".slider");
let cover = document.querySelector(".slider-cover");

window.addEventListener("scroll", function () {
  let scrollHight = window.pageYOffset;
  let screenHeigth = window.screen.height;
  let screenWidth = window.screen.width;
  let sliderHight = slider.getBoundingClientRect().top + window.pageYOffset;
  if (
    scrollHight >= sliderHight - screenHeigth / 2 &&
    scrollHight <= sliderHight + screenHeigth / 4 &&
    screenWidth >= 576
  ) {
    cover.classList.add("hide");
    cover.classList.remove("show");
  } else {
    cover.classList.add("show");
    cover.classList.remove("hide");
  }
});

// Show video

let previewAbout = document.querySelector(".about-video-preview");
let videoAbout = document.querySelector(".about-section-video");

previewAbout.addEventListener("click", function () {
  videoAbout.classList.remove("hide");
  previewAbout.classList.add("hide");
  videoAbout.src = videoAbout.src + "?autoplay=1";
});

let preview = document.querySelectorAll(".slide-preview");
let video = document.querySelectorAll(".slide-video");

for (let i = 0; i < preview.length; i++) {
  preview[i].addEventListener("click", function () {
    video[i].classList.remove("hide");
    preview[i].classList.add("hide");
    video[i].src = video[i].src + "?autoplay=1";
  });
}

// Animation

let salarySection = document.querySelector(".salary-section");
let juniorMin = document.querySelector(".junior-min");
let juniorMax = document.querySelector(".junior-max");
let middleMin = document.querySelector(".middle-min");
let middleMax = document.querySelector(".middle-max");
let seniorMin = document.querySelector(".senior-min");
let seniorMax = document.querySelector(".senior-max");

window.addEventListener("scroll", function () {
  if (
    salarySection.getBoundingClientRect().bottom -
      document.documentElement.clientHeight <
      0 &&
    window.innerWidth > 576
  ) {
    juniorMin.classList.add("junior-min-active");
    juniorMax.classList.add("junior-max-active");
    middleMin.classList.add("middle-min-active");
    middleMax.classList.add("middle-max-active");
    seniorMin.classList.add("senior-min-active");
    seniorMax.classList.add("senior-max-active");
  } else if (
    window.innerWidth <= 576 &&
    salarySection.getBoundingClientRect().bottom -
      document.documentElement.clientHeight -
      200 <
      0
  ) {
    juniorMin.classList.add("junior-min-active");
    juniorMax.classList.add("junior-max-active");
    middleMin.classList.add("middle-min-active");
    middleMax.classList.add("middle-max-active");
    seniorMin.classList.add("senior-min-active");
    seniorMax.classList.add("senior-max-active");
  } else {
    juniorMin.classList.remove("junior-min-active");
    juniorMax.classList.remove("junior-max-active");
    middleMin.classList.remove("middle-min-active");
    middleMax.classList.remove("middle-max-active");
    seniorMin.classList.remove("senior-min-active");
    seniorMax.classList.remove("senior-max-active");
  }
});

// Timer

const countDownDate = new Date("February 28, 2023 23:59:59").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  const colons = document.querySelectorAll(".colon");
  const time = document.querySelector(".time-wrapper");
  const timeIsOverAlert = document.querySelector(".time-is-over");

  if (distance < 0) {
    clearInterval(x);
    time.classList.add("hide");
    time.classList.remove("show-time");
    timeIsOverAlert.classList.add("show");
    timeIsOverAlert.classList.remove("hide");
    for (let i = 0; i < colons.length; i++) {
      colons[i].classList.add("hide");
      colons[i].classList.remove("show");
    }
  } else {
    time.classList.add("show-time");
    time.classList.remove("hide");
    timeIsOverAlert.classList.add("hide");
    timeIsOverAlert.classList.remove("show");
    for (let i = 0; i < colons.length; i++) {
      colons[i].classList.add("show");
      colons[i].classList.remove("hide");
    }
  }
}, 1000);
