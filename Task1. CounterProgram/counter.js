const counter = document.querySelector(".count");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
let count = 0;

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counter.innerHTML = count;
  }
});

increaseBtn.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.innerHTML = count;
});
