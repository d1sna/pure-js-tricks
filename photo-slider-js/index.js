function sliderPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide");
  const descriptions = document.querySelectorAll(".description");

  slides[activeSlide].classList.add("active");
  descriptions[activeSlide].classList.add("active");

  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      const classList = Object.values(slide.classList);
      const isCurrentSlideActive = classList.some(
        (currentClass) => currentClass === "active"
      );

      unsetActiveAllSlides();
      unsetActiveAllDescription();

      if (!isCurrentSlideActive) setActiveCurrentSlideAndDescription(slide);
    });
  });

  const setActiveCurrentSlideAndDescription = (slide) => {
    slide.classList.add("active");
    slide.children[1].classList.add("active");
  };

  const unsetActiveAllSlides = () => {
    slides.forEach((slide) => slide.classList.remove("active"));
  };

  const unsetActiveAllDescription = () => {
    descriptions.forEach((description) =>
      description.classList.remove("active")
    );
  };
}

sliderPlugin();
