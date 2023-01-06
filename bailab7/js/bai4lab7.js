const starsUL = document.querySelector(".stars");
const output = document.querySelector(".output");

const stars = document.querySelectorAll(".star");
stars.forEach((star, index) => {
  star.starValue = index + 1;
  star.addEventListener("click", starRate);
});
function starRate(e) {
  output.innerHTML = "You Rate this $(e.target.starValue)stars";
  stars.forEach((star, index) => {
    if (index < e.target.starValue) {
      star.classList.add("orange");
    } else {
      star.classList.remove("orange");
    }
  });
}
