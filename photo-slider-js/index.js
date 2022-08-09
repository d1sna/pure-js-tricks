const slides = document.querySelectorAll(".slide");
const descriptions = document.querySelectorAll(".description");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    const classList = Object.values(slide.classList);
    if (classList.some((currentClass) => currentClass === "active")) {
      unsetActiveAllSlides();
      unsetActiveAllDescription();
    } else {
      unsetActiveAllSlides();
      unsetActiveAllDescription();
      slide.classList.add("active");
      slide.children[1].classList.add("active");
    }
  });
});

const unsetActiveAllSlides = () => {
  slides.forEach((slide) => slide.classList.remove("active"));
};

const unsetActiveAllDescription = () => {
  descriptions.forEach((description) => description.classList.remove("active"));
};
