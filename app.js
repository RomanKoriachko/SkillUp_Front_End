// Navigation

// let aboutLessonsBtn = document.querySelector(".about-lessons-btn");
// let aboutUsBtn = document.querySelector(".about-us-btn");
// let contactsBtn = document.querySelector(".contacts-btn");
// let registrationBtns = document.querySelectorAll(".registration-btn");

// let header = document.querySelector(".header");

// let aspectSection = document.querySelector(".aspect-section");
// let countSection = document.querySelector(".count-section");
// let footer = document.querySelector(".footer");
// let formSection = document.querySelector(".form-section");

// for (let i = 0; i < registrationBtns.length; i++) {
//   registrationBtns[i].addEventListener("click", function () {
//     window.scrollTo({
//       top:
//         formSection.getBoundingClientRect().top +
//         window.pageYOffset -
//         header.clientHeight,
//       behavior: "smooth",
//     });
//   });
// }

// aboutLessonsBtn.addEventListener("click", function () {
//   window.scrollTo({
//     top:
//       aspectSection.getBoundingClientRect().top +
//       window.pageYOffset -
//       header.clientHeight,
//     behavior: "smooth",
//   });
// });
// aboutUsBtn.addEventListener("click", function () {
//   window.scrollTo({
//     top:
//       countSection.getBoundingClientRect().top +
//       window.pageYOffset -
//       header.clientHeight,
//     behavior: "smooth",
//   });
// });
// contactsBtn.addEventListener("click", function () {
//   window.scrollTo({
//     top:
//       footer.getBoundingClientRect().top +
//       window.pageYOffset -
//       header.clientHeight,
//     behavior: "smooth",
//   });
// });

// window.addEventListener("scroll", function () {
//   if (
//     window.pageYOffset >=
//       aspectSection.getBoundingClientRect().top +
//         window.pageYOffset -
//         header.clientHeight -
//         1 &&
//     aspectSection.getBoundingClientRect().bottom >= 0
//   ) {
//     aboutLessonsBtn.classList.add("active");
//     aboutUsBtn.classList.remove("active");
//     contactsBtn.classList.remove("active");
//   } else {
//     aboutLessonsBtn.classList.remove("active");
//   }

//   if (
//     window.pageYOffset >=
//       countSection.getBoundingClientRect().top +
//         window.pageYOffset -
//         header.clientHeight -
//         1 &&
//     countSection.getBoundingClientRect().bottom >= 0
//   ) {
//     aboutLessonsBtn.classList.remove("active");
//     aboutUsBtn.classList.add("active");
//     contactsBtn.classList.remove("active");
//   } else {
//     aboutUsBtn.classList.remove("active");
//   }

//   if (
//     pageYOffset + window.innerHeight ===
//     document.documentElement.scrollHeight
//   ) {
//     aboutLessonsBtn.classList.remove("active");
//     aboutUsBtn.classList.remove("active");
//     contactsBtn.classList.add("active");
//   } else {
//     countSection.classList.remove("active");
//   }
// });

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
