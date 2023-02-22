const animationBtn = document.querySelector(".reset-animation");
const maskContainer = document.querySelector(".color-image");

animationBtn.addEventListener("click", () => {
  maskContainer.classList.toggle("mask-animation");
});
