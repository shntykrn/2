const carousel1 = document.querySelector(".feedback-carousel");
const firstImg1 = document.querySelectorAll(".feedback-card")[0];
const arrowIcons1 = document.querySelectorAll(".navigation-feedback i");

let isDragStart1 = false;
let prevPageX1, prevScrollLeft1;
let firstImgWidth1 = firstImg1.clientWidth;
let scrollWidth1 = carousel1.scrollWidth - carousel1.clientWidth;

const showHideIcons1 = () => {
  if (carousel1.scrollLeft == 0) {
    arrowIcons1[0].classList.remove("active");
  } else {
    arrowIcons1[0].classList.add("active");
  }

  if (carousel1.scrollLeft == scrollWidth1) {
    arrowIcons1[1].classList.add("active");
  } else {
    arrowIcons1[1].classList.remove("active");
  }
};

arrowIcons1.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel1.scrollLeft +=
      icon.id == "left" ? -firstImgWidth1 : firstImgWidth1;
    setTimeout(() => showHideIcons1(), 60);
  });
});

const dragStart1 = (e) => {
  isDragStart1 = true;
  prevPageX1 = e.pageX;
  prevScrollLeft1 = carousel1.scrollLeft;
};

const dragging1 = (e) => {
  if (!isDragStart1) return;
  e.preventDefault();
  carousel1.classList.add("dragging");
  let positionDiff1 = e.pageX - prevPageX1;
  carousel1.scrollLeft = prevScrollLeft1 - positionDiff1;
  showHideIcons1();
};

const dragStop1 = () => {
  isDragStart1 = false;
  carousel1.classList.remove("dragging");
};

carousel1.addEventListener("mousedown", dragStart1);
carousel1.addEventListener("mousemove", dragging1);
carousel1.addEventListener("mouseup", dragStop1);
