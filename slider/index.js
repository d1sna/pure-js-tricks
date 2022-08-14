const buttonUp = document.querySelector(".up-button");
const buttonDown = document.querySelector(".down-button");

const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;

const container = document.querySelector(".container");

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

buttonDown.addEventListener("click", () => {
  changeSlide("down");
});
buttonUp.addEventListener("click", () => {
  changeSlide("up");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) activeSlideIndex = 0;
  }
  if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) activeSlideIndex = slidesCount - 1;
  }

  const height = container.clientHeight;
  const changeValue = activeSlideIndex * height;

  mainSlide.style.transform = `translateY(${-changeValue}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
