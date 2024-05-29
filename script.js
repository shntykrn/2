
// JS for slide show
let slideIndex = 1;
const slides = ["DestinationPlace-BukitWarinding.jpg", "DestinationPlace-BukitWarinding2.jpg"];
showSlide(slideIndex);

// Fungsi untuk mengontrol tombol next/previous
function plusSlides(n) {
  showSlide(slideIndex += n);
}

// Fungsi untuk menampilkan slide berdasarkan indeks
function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  const mainImage = document.getElementById("mainImage");
  mainImage.src = slides[slideIndex - 1];
}
