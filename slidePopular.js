const carousel2 = document.querySelector(".carousel");
const firstImg2 = document.querySelectorAll(".card")[0];
const arrowIcons2 = document.querySelectorAll(".navigation-popular i");

let isDragStart2 = false;
let prevPageX2, prevScrollLeft2;
let firstImgWidth2 = firstImg2.clientWidth;
let scrollWidth2 = carousel2.scrollWidth - carousel2.clientWidth;

const showHideIcons2 = () => {
  if (carousel2.scrollLeft == 0) {
    arrowIcons2[0].classList.remove("active");
  } else {
    arrowIcons2[0].classList.add("active");
  }

  if (carousel2.scrollLeft == scrollWidth2) {
    arrowIcons2[1].classList.add("active");
  } else {
    arrowIcons2[1].classList.remove("active");
  }
};

arrowIcons2.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel2.scrollLeft +=
      icon.id == "left" ? -firstImgWidth2 : firstImgWidth2;
    setTimeout(() => showHideIcons2(), 60);
  });
});

const dragStart2 = (e) => {
  isDragStart2 = true;
  prevPageX2 = e.pageX;
  prevScrollLeft2 = carousel2.scrollLeft;
};

const dragging2 = (e) => {
  if (!isDragStart2) return;
  e.preventDefault();
  carousel2.classList.add("dragging");
  let positionDiff2 = e.pageX - prevPageX2;
  carousel2.scrollLeft = prevScrollLeft2 - positionDiff2;
  showHideIcons2();
};

const dragStop2 = () => {
  isDragStart2 = false;
  carousel2.classList.remove("dragging");
};

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("mousemove", dragging2);
carousel2.addEventListener("mouseup", dragStop2);
