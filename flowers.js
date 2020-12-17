// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};
slider();

//Scrolling
for (let x = 1; x < 5; x++) {
  document.querySelector(`#li${x}`).addEventListener("click", function () {
    document
      .querySelector(`.section${x}`)
      .scrollIntoView({ behavior: "smooth" });
  });
}

//Section2 displaying popups
const pop = document.querySelectorAll(".pop");
const content = document.querySelector(".content");
const overlay = document.querySelector(".overlay");

overlay.classList.add("hidden");
pop.forEach((p) => p.classList.add("hidden"));

for (let x = 1; x < 5; x++) {
  const offers = document.querySelector(`#offer${x}`);
  offers.addEventListener("click", function () {
    document.querySelector(`#pop${x}`).classList.remove("hidden");
    overlay.classList.remove("hidden");
    pop.forEach((p) => {
      p.style.top = `${window.scrollY + 100}px`;

      if (window.innerWidth >= 1000) {
        p.style.left = `${250 + window.innerWidth * 0.04}px`;
        p.style.width = `${window.innerWidth * 0.7}px`;
      } else {
        p.style.left = `5%`;
        p.style.width = `90%`;
      }
    });
  });
}

//Closing popup
const cross = document.querySelectorAll(".closing-cross");
cross.forEach((c) =>
  c.addEventListener("click", function () {
    pop.forEach((p) => p.classList.add("hidden"));
    overlay.classList.add("hidden");
    content.style.filter = "none";
  })
);

overlay.addEventListener("click", function () {
  pop.forEach((p) => p.classList.add("hidden"));
  overlay.classList.add("hidden");
  content.style.filter = "none";
});
